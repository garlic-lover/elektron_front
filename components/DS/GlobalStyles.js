import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
    transition : ease-in-out 0.5s;
    background-color : ${(props) => props.theme.background};
    color :${(props) => props.theme.mainColor};
    }
    input, select, textarea{
        padding : 4px ;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }
 `;

export default GlobalStyles;
