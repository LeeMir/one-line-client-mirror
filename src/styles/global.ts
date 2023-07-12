import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

import { ColorCode } from '@/constants/color';
import CurtainImg from '@/assets/images/curtain.png';
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
    background-position: center;
    background-size: cover;
    overflow: hidden;
  }

  body::after{
	/* 소스만 다운받고 화면은 나태내지 않는다. (숨김 처리) */
    position:absolute; 
    width:0; 
    height:0; 
    overflow:hidden; 
    z-index:-1;
    
    /* load images */
    content: url('${BackgroundImg}') url('${CurtainImg}'); /* 필요한 이미지 소스들 다운 */
}
`;

export default GlobalStyle;
