import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const SectionTools = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 20px 40rem;

  @media (max-width: 1630px) {
    padding: 20px 20rem;
  }

  @media (max-width: 1160px) {
    padding: 20px 8rem;
  }

  @media (max-width: 716px) {
    padding: 20px 9rem;
  }

  @media (max-width: 460px) {
    padding: 20px 4rem;
  }
`;
