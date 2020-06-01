import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
  align-self: center;
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.text};

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
  }

  footer + footer {
    margin-top: 1rem;
  }

  svg {
    margin: 0 8px;
  }
`;
