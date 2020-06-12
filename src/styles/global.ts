import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body{
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

 /* media queries  */
  @media (max-width: 770px) {
  html{
    font-size: 40%;
  }

  @media (max-width: 500px) {
  html{
    font-size: 25%;
  }


}


`;
