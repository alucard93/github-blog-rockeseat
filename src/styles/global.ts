import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    ol, ul {
    list-style: none;
    }

    body {
        background-color: ${(props) => props.theme['base-background']};
        color: ${(props) => props.theme['white']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    figure {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline: 0;
    }


`
