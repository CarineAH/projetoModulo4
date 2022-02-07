import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: "Poppins", sans-serif;
        scroll-behavior: smooth;
        overflow-x: hidden;
        background-color: #78a8ca;
    }
    ::-webkit-scrollbar{
        padding: 5px 0px;
        width: 10px;
        height: 10px;
        border-radius: 15px;
        background-color: rgba(225, 225, 225, 0.5);
    }
    ::-webkit-scrollbar-track{
        width: 15px;
        background-image: linear-gradient(45deg, #142344, #1d305c);
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 15px;
        background-color: rgba(225, 225, 225, 0.5);
    }
    ::selection {
        background: rgba(55, 95, 196, 0.7); /* WebKit/Blink Browsers */
    }
`;