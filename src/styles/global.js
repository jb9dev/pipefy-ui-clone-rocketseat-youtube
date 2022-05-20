import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #ecf1f8;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }
`;
