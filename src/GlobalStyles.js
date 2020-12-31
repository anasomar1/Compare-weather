import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
}
@media (max-width: 766px) {
    body{
        font-size:80%;
    }
}

`;

export default GlobalStyle;
