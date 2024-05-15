import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        word-break: break-word;
        background: ${({ theme }) => theme.colors.gallery};      
    }

    button {
        cursor: pointer;
    }
`;

export const Container = styled.main`
    max-width: 850px;
    padding: 20px;
    margin: auto;
    margin-top: 10px;    
`;