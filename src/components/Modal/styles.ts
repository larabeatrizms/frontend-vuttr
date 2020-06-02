import styled from 'styled-components';

import Modal from 'react-modal';

interface ContentProps {
  type: 'add' | 'remove';
}

export const Container = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  border-radius: 1rem;
  max-width: 55rem;
  /* max-height: 42.1rem; */
  padding: 2rem;

  background-color: ${(props) => props.theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      align-items: center;
      font-size: 2.4rem;
    }

    .title {
      color: ${(props) => props.theme.colors.cardTittle};
      font-weight: 700;
    }

    .title svg {
      margin-right: 0.8rem;
    }

    button {
      background-color: Transparent;
      background-repeat: no-repeat;
      height: 2rem;
    }
  }

  .form {
    margin: 3.2rem 2.6rem 0 3.2rem;

    p {
      color: ${(props) => props.theme.colors.cardDescription};
      font-size: 1.4rem;
      margin-bottom: 0.2rem;
    }

    p + input {
      margin-bottom: 1.5rem;
    }

    p > span {
      font-size: 1rem;
      margin-left: 0.7rem;
    }

    textarea {
      background-color: ${(props) => props.theme.colors.backgroundCard};
      color: ${(props) => props.theme.colors.cardDescription};
      border-radius: 1rem;
      border: 0;
      max-width: 100%;
      width: 100%;
      min-width: 100%;
      min-height: 100px;
      max-height: 300px;
      padding: 15px;
      margin-bottom: 1.5rem;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }

    div button {
      display: flex;
      justify-content: center;
      margin-top: 1.7rem;
      margin-bottom: 1.2rem;
    }
  }
`;
