import { createGlobalStyle } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }

    ul {
        list-style-type: none;
        margin: 0;
    }

    a { 
        text-decoration: none;
        color: #333;
    }

    .row>* {
        margin: 0;
        padding: 0;
    }

    .navbar-toggler-icon {
    display: block !important;  /* Garante que o ícone será visível */
}

`;