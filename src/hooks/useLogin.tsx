const { VITE_BASE_URL } = import.meta.env;

const useLogin = () => {
  const loginWithKakao = () => {
    window.location.href = `${VITE_BASE_URL}/oauth2/authorization/kakao`;
  };

  return {
    loginWithKakao,
  };
};

export default useLogin;
