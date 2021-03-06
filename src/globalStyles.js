import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

export default createGlobalStyle`
  ${styledNormalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: ${props => props.theme.fontFamily};
    font-size: 62.5%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.black};
  }

  body,
  html {
    height: 100%;
    width: 100%;
  }
`;
