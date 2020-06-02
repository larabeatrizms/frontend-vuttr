import React from 'react';
import { Form } from '@unform/web';
import { FiPlus } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';

import { useModal } from '../../hooks/modal';

import ButtonTheme from '../ButtonTheme';
import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

interface SearchData {
  search: string;
}

const Header: React.FC = () => {
  const { isOpenAdd } = useModal();

  function handleSubmit(data: SearchData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="logo-content">
        <img src={logoImg} alt="vuttr" />

        <ButtonTheme />
      </div>
      <div className="bottom-content">
        <div>
          <Form onSubmit={handleSubmit}>
            <Input
              name="search"
              sizeType="search"
              placeholder="Search in tags only"
            />

            <Button variant="search" size="large" type="submit">
              Pesquisar
            </Button>
          </Form>
        </div>

        <Button variant="add" size="large" onClick={() => isOpenAdd()}>
          <div>
            <FiPlus size={25} />
            Add
          </div>
        </Button>
      </div>
    </Container>
  );
};

export default Header;
