import React, { InputHTMLAttributes, useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  sizeType: string;
  isTextArea?: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  sizeType,
  isTextArea = false,
  ...rest
}) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = '', registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      {isTextArea ? (
        <textarea
          ref={inputRef}
          defaultValue={defaultValue}
          rows={4}
          cols={55}
        />
      ) : (
        <Container
          ref={inputRef}
          defaultValue={defaultValue}
          sizeType={sizeType}
          {...rest}
        />
      )}
    </>
  );
};

export default Input;
