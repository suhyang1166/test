import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* 구글폰트 */
  @import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

  /* reset style */
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  li {
      list-style: none;
    }
  a {
      text-decoration: none;
      color: inherit;
    }
  body {
      font-family: "Montserrat";
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      overflow-x: hidden; 
    }
`;
