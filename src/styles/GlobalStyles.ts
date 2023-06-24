import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import fontSemiBold from '@assets/fonts/Poppins-SemiBold.ttf';

export const GlobalStyle = createGlobalStyle`
   ${reset}

    @font-face {
        font-family: 'PoppinsSemiBold';
        src: url(${fontSemiBold})
    }
    html{
        font-size: 10px;
    }
    /* Reset CSS */
    /* Box sizing border-box */  
    *{
        font-family: 'PoppinsSemiBold';
        color: #0B2239;
    }
    button{
        font-family: normal;
    }
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    /* Remove margin and padding */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    ol,
    ul,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
        padding: 0;
    }

    /* Remove list styles (bullet points) */
    ul,
    ol {
        list-style: none;
    }

    /* Typography */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: normal;
    }
    /* Remove hyperlink styles */
    a {
        color: inherit;
        text-decoration: none;
    }

    /* Remove outline on focused elements */
    *:focus {
        outline: none;
    }
    button{
        background: none;
        border: none;
    }
    #root,.App{
        min-height: 100vh;
        background-color: #F9F9F9;
    }
`;
