import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Playfair Display', serif;
    color: #333;
    width: 100%;
  }
`;

export default GlobalStyle;