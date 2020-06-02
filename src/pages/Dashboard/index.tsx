import React, { useState, useEffect, useCallback } from 'react';
import { FiPlus } from 'react-icons/fi';
import api from '../../services/api';
import { useModal } from '../../hooks/modal';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import { Container } from './styles';

interface Tool {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const Dashboard: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>([]);
  const { isOpenRemove, cardId } = useModal();

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');

      setTools(response.data);
    }

    loadTools();
  }, []);

  const removeTool = useCallback(
    async (id) => {
      await api.delete(`/tools/${id}`);

      const toolIndex = tools.findIndex((tool) => tool.id === id);

      const toolsNew = tools;
      toolsNew.splice(toolIndex, 1);

      setTools([...toolsNew]);
      isOpenRemove();
    },
    [isOpenRemove, tools],
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
            onClick={() => removeTool(cardId)}
          >
            <div>Remove</div>
          </Button>
        </div>
      </Modal>
      <Modal title="Add new tool" type="add">
        <p>Tool Name</p>
        <Input sizeType="form" />

        <p>Tool Link</p>
        <Input sizeType="form" />

        <p>Tool description</p>
        <textarea rows={4} cols={55} />

        <p>Tags</p>
        <Input sizeType="form" />

        <div>
          <Button variant="addTool" size="regular">
            <div>
              <FiPlus size={25} />
              Add
            </div>
          </Button>
        </div>
      </Modal>
      <Header />

      {tools.map((tool) => (
        <Card
          key={tool.id}
          id={tool.id}
          title={tool.title}
          description={tool.description}
          link={tool.link}
          tags={tool.tags}
        />
      ))}

      <Footer />
    </Container>
  );
};

export default Dashboard;
