import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.button`
  width: 50px;
  height: 50px;

  border-radius: 50%;

  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.theme.title === 'light' ? colors.grayDarker : colors.grayLight};

  svg {
    font-size: 20px;
    color: ${(props) =>
      props.theme.title === 'light' ? colors.white : colors.grayBlack};
  }
`;
