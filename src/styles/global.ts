import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }


  body {
    background: ${(props) => props.theme.colors.background};
    transition: all 0.2s;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    padding: 0;
    border: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  #root {
    
    margin: 0 auto;
    
  }

`;
