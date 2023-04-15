import { useRecoilState, useResetRecoilState } from 'recoil';
import { useQuery, useQueryClient } from 'react-query';

import { userState } from '@/stores/user';

import { API_KEYS } from '@/constants/apiKey';
import { fetchGetMyInfo } from '@/apis/user';

const { VITE_BASE_URL } = import.meta.env;

const useLogin = () => {
  const [user, setUser] = useRecoilState(userState);
  const resetUser = useResetRecoilState(userState);
  const queryClient = useQueryClient();

  useQuery(API_KEYS.GET_USER_INFO, fetchGetMyInfo, {
    retry: 0,
    onSuccess: (data) => {
      setUser((prev) => ({ ...prev, ...data, isLogined: true }));
    },
    onError: () => {
      resetUser();
    },
  });

  const loginWithKakao = () => {
    window.location.href = `${VITE_BASE_URL}/user/login`;
  };

  const checkLogin = () => {
    queryClient.invalidateQueries({ queryKey: [API_KEYS.GET_USER_INFO] });
  };

  const getMe = () => {
    if (user.isLogined) {
      checkLogin();
    }
    return user;
  };

  return {
    getMe,
    loginWithKakao,
  };
};

export default useLogin;
