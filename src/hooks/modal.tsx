import React, { useState, useContext, createContext, useCallback } from 'react';

interface ModalContextData {
  isOpenAdd(): void;
  isOpenRemove(): void;
  modalAddIsOpen: boolean;
  modalRemoveIsOpen: boolean;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
  const [modalRemoveIsOpen, setModalRemoveIsOpen] = useState(false);

  const isOpenAdd = useCallback(() => {
    setModalAddIsOpen(!modalAddIsOpen);
  }, [modalAddIsOpen]);

  const isOpenRemove = useCallback(() => {
    setModalRemoveIsOpen(!modalRemoveIsOpen);
  }, [modalRemoveIsOpen]);

  // useEffect(() => {}, []);

  const value = React.useMemo(
    () => ({ isOpenAdd, isOpenRemove, modalAddIsOpen, modalRemoveIsOpen }),
    [isOpenAdd, isOpenRemove, modalAddIsOpen, modalRemoveIsOpen],
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
