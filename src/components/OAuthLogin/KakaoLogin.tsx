import { LoginImg, LoginWrapper } from './OAuthLogin.common.styled';

import KakaoLoginImg from '@/assets/images/login-kakao.png';

interface KakaoLoginValue {
  onClick?: () => void;
}

const KakaoLogin = ({ onClick }: KakaoLoginValue) => {
  return (
    <LoginWrapper onClick={onClick}>
      <LoginImg src={KakaoLoginImg} />
    </LoginWrapper>
  );
};

export default KakaoLogin;
