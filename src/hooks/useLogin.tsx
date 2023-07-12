import { useQuery } from 'react-query';

import { API_KEYS } from '@/constants/apiKey';
import { fetchGetMyInfo } from '@/apis/user';

const { VITE_BASE_URL } = import.meta.env;

const useLogin = () => {
  const res = useQuery(API_KEYS.GET_USER_INFO, fetchGetMyInfo, {
    retry: 0,
  });

  const loginWithKakao = () => {
    window.location.href = `${VITE_BASE_URL}/user/login`;
  };

  const getMe = () => {
    if (res.isSuccess) {
      return { ...res.data, isLogined: true };
    }
    return { isLogined: false };
  };

  return {
    getMe,
    loginWithKakao,
  };
};

export default useLogin;
