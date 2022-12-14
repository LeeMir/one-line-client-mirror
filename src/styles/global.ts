import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { ColorCode } from '@/constants/color';
import BackgroundImg from '@/assets/images/background.png';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-size: calc(min(0.35vw, 3.76px) + 8.74px);
    background-color: ${ColorCode.OFFWHITE};

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }
  html,
  body,
  span,
  div,
  a,
  input,
  textarea,
  button {
    font-family: 'NotoSansKR', sans-serif;
  }

  button {
    background: none;
    outline: none;
    border: none;
  }

  #root {
    width: 100vw;
    background-image: url('${BackgroundImg}');
    background-attachment: fixed;
    background-size: cover;
  }
`;

export default GlobalStyle;
