import React, { useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Form } from '@unform/web';
import ReactLoading from 'react-loading';

import { useModal } from '../../hooks/modal';
import { useTools } from '../../hooks/tools';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import colors from '../../styles/colors';
import { Container, SectionTools } from './styles';

interface Tool {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

interface AddToolFormData {
  title: string;
  description: string;
  link: string;
  tags: string;
}

const Dashboard: React.FC = () => {
  const { isOpenAdd, isOpenRemove, cardId } = useModal();
  const {
    tools,
    loading,
    loadTools,
    removeTool,
    handleAddToolSubmit,
  } = useTools();

  useEffect(() => {
    loadTools();
  }, [loadTools]);

  async function handleSubmit(data: AddToolFormData) {
    await handleAddToolSubmit(data);
    isOpenAdd();
  }

  const CallRemoveTool = useCallback(
    (id) => {
      removeTool(id);
      isOpenRemove();
    },
    [isOpenRemove, removeTool],
  );

  return (
    <Container>
      <Modal title="Remove tool" type="remove">
        <p>Are you sure you want to remove Notion</p>
        <div>
          <Button
            variant="cancel"
            size="regular"
            onClick={() => isOpenRemove()}
          >
            <div>Cancel</div>
          </Button>
          <Button
            variant="remove"
            size="regular"
            onClick={() => CallRemoveTool(cardId)}
          >
            <div>Remove</div>
          </Button>
        </div>
      </Modal>
      <Modal title="Add new tool" type="add">
        <Form onSubmit={handleSubmit}>
          <p>Tool Name</p>
          <Input name="title" sizeType="form" required />

          <p>Tool Link</p>
          <Input name="link" sizeType="form" required />

          <p>Tool description</p>
          <Input name="description" sizeType="form" isTextArea required />

          <p>
            Tags
            <span>*separate with spaces</span>
          </p>
          <Input name="tags" sizeType="form" required />

          <div>
            <Button variant="addTool" size="regular" type="submit">
              <div>
                <FiPlus size={25} />
                Add
              </div>
            </Button>
          </div>
        </Form>
      </Modal>
      <Header />

      <SectionTools>
        {loading ? (
          <ReactLoading type="bubbles" color={colors.orange} width={80} />
        ) : (
          tools.map((tool) => (
            <Card
              key={tool.id}
              id={tool.id}
              title={tool.title}
              description={tool.description}
              link={tool.link}
              tags={tool.tags}
            />
          ))
        )}
      </SectionTools>
      <Footer />
    </Container>
  );
};

export default Dashboard;
