import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

const GlobalStyle = createGlobalStyle`
  /*
   * Resets
   */
  body {
    margin: 0;
  }
  h1 {
    margin: 0;
  }

  /*
   * Text
   */
  body {
    font-family: 'Roboto', 'Arial', sans-serif;
    line-height: 1.5;
  }
  h1 {
    color: #8334fa;
    letter-spacing: 2px;
  }
  figcaption {
    font-size: .8rem;
    text-align: center;
    font-style: italic;
  }
  p, figcaption {
    font-weight: 300;
    color: ${lighten(.2, '#000')};
  }
`;

export default GlobalStyle;
