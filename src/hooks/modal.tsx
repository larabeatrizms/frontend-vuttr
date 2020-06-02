import React, { useState, useContext, createContext, useCallback } from 'react';

interface ModalContextData {
  isOpenAdd(): void;
  isOpenRemove(id?: string): void;
  modalAddIsOpen: boolean;
  modalRemoveIsOpen: boolean;
  cardId: string;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = useState(false);
  const [cardId, setCardId] = useState('');

  const isOpenAdd = useCallback(() => {
    setModalAddIsOpen(!modalAddIsOpen);
  }, [modalAddIsOpen]);

  const isOpenRemove = useCallback(
    (id) => {
      setModalRemoveIsOpen(!modalRemoveIsOpen);
      setCardId(id);
    },
    [modalRemoveIsOpen],
  );

  // useEffect(() => {}, []);

  const value = React.useMemo(
    () => ({
      isOpenAdd,
      isOpenRemove,
      modalAddIsOpen,
      modalRemoveIsOpen,
      cardId,
    }),
    [isOpenAdd, isOpenRemove, modalAddIsOpen, modalRemoveIsOpen, cardId],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used whithin a ModalProvider');
  }

  return context;
}

export { ModalProvider, useModal };
