import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset}
    /* Reset CSS */
    /* Box sizing border-box */
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
    body {
        font-family: Arial, sans-serif;
    }

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
`;
