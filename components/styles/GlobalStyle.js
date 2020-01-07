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
    color: #fa8334;
    letter-spacing: 2px;
  }
  p {
    color: ${lighten(.2, '#000')};
  }
  figcaption {
    font-size: .8rem;
    text-align: center;
    font-style: italic;
    color: ${lighten(.5, '#000')};
  }
  p, figcaption {
    font-weight: 300;
  }
`;

export default GlobalStyle;
