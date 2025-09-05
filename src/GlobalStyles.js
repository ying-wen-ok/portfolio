import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }

  html, body, #root { 
  height: 100%; 
  background: #121212; 
  }


  body {
    margin: 0;       /* 关键：去掉默认 8px 外边距 */
    padding: 0;
    overflow-x: hidden;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji";
  }
  :root { scroll-behavior: smooth; }
`;

export default GlobalStyles;
