const { VITE_BASE_URL } = import.meta.env;

const useLogin = () => {
  const loginWithKakao = (lineId: number, message: string, title: string) => {
    window.location.href = `${VITE_BASE_URL}/users/login?line=${lineId}&content=${message}&title=${title}`;
  };

  return {
    loginWithKakao,
  };
};

export default useLogin;
