import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

import { LocationStateValue } from '@/types/location';

export const useLink = () => {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      back: (number = -1) => {
        navigate(number);
      },
      to: (path: string, state?: LocationStateValue) => {
        navigate(path, { state });
      },
      replace: (path: string) => {
        navigate(path, { replace: true });
      },
    };
  }, [navigate]);
};
