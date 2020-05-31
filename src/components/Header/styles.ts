import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  height: 200px;

  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
