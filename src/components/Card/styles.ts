import styled from 'styled-components';

interface ContainerProps {
  title: string;
  description: string;
  tags: string[];
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundCard};
  border-radius: 10px;
  min-height: 137px;

  display: flex;

  margin: 20px 40rem 0 40rem;
  padding: 1.8rem 2rem;

  button {
    background-color: Transparent;
    background-repeat: no-repeat;
    height: 2rem;

    color: ${(props) => props.theme.colors.warning};
  }

  @media (max-width: 1630px) {
    margin: 20px 20rem 0 20rem;
  }

  @media (max-width: 1160px) {
    margin: 20px 8rem 0 8rem;
  }

  @media (max-width: 716px) {
    margin: 20px 9rem 0 9rem;
  }

  @media (max-width: 460px) {
    margin: 20px 4rem 0 4rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  h1 {
    color: ${(props) => props.theme.colors.cardTittle};
    font-size: 2.4rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme.colors.cardDescription};
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  div strong {
    color: ${(props) => props.theme.colors.cardTags};
    font-size: 1.4rem;
    font-weight: 600;

    display: inline-block;

    & + strong {
      margin-left: 10px;
    }
  }
`;
