import React, { useState } from 'react';
import { FiPlus, FiXCircle, FiX } from 'react-icons/fi';
import colors from '../../styles/colors';

import Input from '../Input';

import { Container, Content } from './styles';
import { useTheme } from '../../hooks/theme';

interface ModalProps {
  isOpen: boolean;
  title: string;
  type: 'add' | 'remove';
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, title, type }) => {
  const { theme } = useTheme();

  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(isOpen);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Container
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor:
              theme.title === 'light'
                ? 'rgba(247, 242, 252, 0.8)'
                : 'rgba(50, 50, 57, 0.8)',
          },
        }}
      >
        <Content>
          <div className="header">
            <div className="title">
              {type === 'add' && <FiPlus color={colors.green} />}
              {type === 'remove' && <FiX color={colors.red} />}
              {title}
            </div>
            <button type="button" onClick={() => setIsOpen(false)}>
              <FiXCircle color={colors.red} size={22} />
            </button>
          </div>
          <form>{children}</form>
        </Content>
      </Container>
    </>
  );
};

export default Modal;
