import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fontSemiBold from "/assets/fonts/Poppins-SemiBold.ttf";

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
        color: #0B2239;
    }

    /* Remove list styles (bullet points) */
    ul,
    li,
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
        cursor: pointer;
    }

    /* Remove outline on focused elements */
    *:focus {
        outline: none;
    }
    button{
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    #root,.App{
        min-height: 100vh;
    }
    .ant-select-dropdown{
        z-index: 9999999!important;
    }
    .ant-select-dropdown .ant-select-item-option-content {
        text-overflow: unset;
        white-space: normal;
    }
`;
