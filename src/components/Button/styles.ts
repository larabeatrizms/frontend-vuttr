import styled, { css } from 'styled-components';

interface ContainerProps {
  variant: string;
  size: string;
}

export const Container = styled.button<ContainerProps>`
  height: ${(props) => (props.size === 'large' ? 49 : 30)}px;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.buttonText};

  font-size: 1.6rem;
  font-weight: 700;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin-right: 5px;
    }
  }

  ${(props) =>
    props.variant === 'search' &&
    css`
      width: 135px;
      background-color: ${props.theme.colors.secondary};
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;

      @media (max-width: 716px) {
        max-width: 100px;
      }

      @media (max-width: 480px) {
        font-size: 1.2rem;
        max-width: 80px;
        height: ${props.size === 'large' ? 39 : 30}px;
      }
    `}
  ${(props) =>
    props.variant === 'add' &&
    css`
      width: 135px;
      background-color: ${props.theme.colors.success};

      @media (max-width: 830px) {
        margin-top: 10px;
      }

      @media (max-width: 480px) {
        font-size: 1.2rem;
        max-width: 80px;
        height: ${props.size === 'large' && 39}px;
      }
    `}

  ${(props) =>
    props.variant === 'addTool' &&
    css`
      width: 101px;
      height: 30px;
      background-color: ${props.theme.colors.success};
    `}

  ${(props) =>
    props.variant === 'remove' &&
    css`
      width: 101px;
      height: 30px;
      background-color: ${props.theme.colors.warning};
    `};


`;
