import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a {
    text-align: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 12px;
    background-color: rgba(20, 20, 20, 1);
    color: white;
    padding-top: 70px;
    padding-left: 15px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyles