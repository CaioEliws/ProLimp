import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme["blue-100"]};
    }

    html, body {
        height: 100%;
    }

    body {
        background-color: ${props => props.theme["white"]};
        color: ${props => props.theme["black"]};
        --webkit-font-smoothing: antialised;
    }

    html, body, input, textarea, button, select {
        font: 400 1.6rem Montserrat, sans-serif;

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            padding: 0 20px;
        }
    }

    a {
        text-decoration: none;
        color: ${props => props.theme["black"]};
    }
`;