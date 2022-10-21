import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    ul, ol, li{
        list-style: none;
    }

    img{
        max-width: 100%;
    }

    input, select{
        background: transparent;
        border: none;
    } 

    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --gray-0: #F8F9FA;
        --gray-1: #868E96;
        --gray-2: #343B41;
        --gray-3: #212529;
        --gray-4: #121214;

        --toastify-color-success: #3FE864;
        --toastify-color-error: #E83F5B;
        --toastify-color-light: #343B41;

        --toastify-font-family: 'Inter', sans-serif;
        --toastify-text-color-light: #F8F9FA;
    }

    body{
        background: var(--gray-4);

        height: 100vh;
        width: 100vw;
    }

    h1, h2, h3, h4, h5, h6, p, span, li {
        font-family: 'Inter', sans-serif;
    }
`;
