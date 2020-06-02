import React from 'react';
import { FiPlus, FiXCircle, FiX } from 'react-icons/fi';
import colors from '../../styles/colors';

import { Container, Content } from './styles';
import { useTheme } from '../../hooks/theme';
import { useModal } from '../../hooks/modal';

interface ModalProps {
  title: string;
  type: 'add' | 'remove';
}

const Modal: React.FC<ModalProps> = ({ children, title, type }) => {
  const { theme } = useTheme();
  const {
    isOpenAdd,
    isOpenRemove,
    modalAddIsOpen,
    modalRemoveIsOpen,
  } = useModal();

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <>
      <Container
        isOpen={type === 'add' ? modalAddIsOpen : modalRemoveIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => (modalAddIsOpen ? isOpenAdd() : isOpenRemove())}
        style={{
          overlay: {
            backgroundColor:
              theme.title === 'light'
                ? 'rgba(247, 242, 252, 0.8)'
                : 'rgba(50, 50, 57, 0.8)',
          },
        }}
        className="modal"
        ariaHideApp={false}
      >
        <Content>
          <div className="header">
            <div className="title">
              {type === 'add' && <FiPlus color={colors.green} />}
              {type === 'remove' && <FiX color={colors.red} />}
              {title}
            </div>
            <button
              type="button"
              onClick={() => (modalAddIsOpen ? isOpenAdd() : isOpenRemove())}
            >
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
