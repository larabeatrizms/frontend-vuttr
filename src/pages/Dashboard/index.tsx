import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import { Container } from './styles';
import api from '../../services/api';

interface Tool {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

const Dashboard: React.FC = () => {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function loadTools(): Promise<void> {
      const response = await api.get('/tools');

      setTools(response.data);
    }

    loadTools();
  }, []);

  return (
    <Container>
      <Modal title="Remove tool" type="remove">
        <p>Are you sure you want to remove Notion</p>
        <div>
          <Button variant="cancel" size="regular">
            <div>Cancel</div>
          </Button>
          <Button variant="remove" size="regular">
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
