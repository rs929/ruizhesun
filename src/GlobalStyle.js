import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root {
    --background: #FFFFFF:
    --lavendar: #C589E8;
    --purple: #410f70;
    --dark-purple: #220b4e;
    --light-purple: #b691ff;
    --offblack: #232b2b;
    --hover: rgba(0, 0, 0, 0.1);
}

html {
    font-size: 16px;
    font-family: Georgia;
    text-align: left;
}

ul, li {
    list-style: none;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyle;