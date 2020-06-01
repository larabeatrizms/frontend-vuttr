import React from 'react';
import { FiPlus } from 'react-icons/fi';

import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

import { Container, ModalContainers } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ModalContainers>
        <Modal isOpen>
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
      </ModalContainers>
      <Header />

      <Card />
      <Card />
      <Card />
      <Card />
      <Footer />
    </Container>
  );
};

export default Dashboard;
