import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html {
    overflow: hidden;
  }

  body {
    background: #003B71;
    color: #f2f2f2;
  }
  
  body, input, button {
    font-family: 'Oswald', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  p {
    color: #303030;
    font-size: 18px;
  }
`;