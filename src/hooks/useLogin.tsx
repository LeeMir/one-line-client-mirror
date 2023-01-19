const { VITE_BASE_URL } = import.meta.env;

const useLogin = () => {
  const loginWithKakao = (lineId: number, message: string) => {
    window.location.href = `${VITE_BASE_URL}/users/login?line=${lineId}&content=${message}`;
  };

  return {
    loginWithKakao,
  };
};

export default useLogin;
