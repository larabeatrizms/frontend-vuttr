import React from 'react';
import { FiPlus } from 'react-icons/fi';
import logoImg from '../../assets/logo.png';

import ButtonTheme from '../ButtonTheme';
import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <div className="logo-content">
        <img src={logoImg} alt="vuttr" />

        <ButtonTheme />
      </div>
      <div className="bottom-content">
        <div>
          <Input sizeType="search" placeholder="Search in tags only" />

          <Button variant="search" size="large">
            Pesquisar
          </Button>
        </div>

        <Button variant="add" size="large">
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
