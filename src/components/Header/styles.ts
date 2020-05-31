import styled from 'styled-components';

// const degradeTo = (props) => props.theme.colors.degradeTo;
// const degradeFrom = (props) => props.theme.colors.degradeFrom;

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.degradeTo};

  /* background: ${(props) => props.theme.colors.degrade}; */
  transition: background-color 0.2s;

  height: 200px;

  display: flex;
  justify-content: space-between;
  padding: 20px 128px;

  h1 {
    color: ${(props) => props.theme.colors.subtitle};
  }
`;
