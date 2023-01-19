import { Navigate, useLocation } from 'react-router-dom';

import { queryStrToJSON } from '@/utils/queryString';

const LoginPage = () => {
  const location = useLocation();
  const { line_id: lineId, content, name } = queryStrToJSON(location.search);

  if (lineId && content && name) {
    return <Navigate to='/' state={{ lineId, content, name }} />;
  }

  return <Navigate to='/error' />;
};

export default LoginPage;
