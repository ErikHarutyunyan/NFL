import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Saira Semi Condensed', sans-serif;
    font-size: 16px;
    background: #E5E5E5;
    min-height: 100vh;
    font-weight: 400;
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
      border-radius: 8px;
    }
 
    /* Handle */
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: linear-gradient(0deg, #00438B 0%, #07C93E 0.01%, #1DA945 13.54%, #20A446 15.63%, #3C7B4E 32.81%, #00438B 58.85%, rgba(0, 67, 139, 0.76) 94.27%);
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
     
    }
    
    
  }
  ul li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a {
    text-decoration: none;
  }

  .main-container {
    max-width: 1460px;
    padding: 0 10px;
    margin: 0 auto;
  }

  button {
    background-color: transparent;
    border:none;
  }

`;
