/**
 *
 * LoginContainer
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { Login } from '../../components/pages/login';
import { login } from '../../state/queryFunctions';
import { useAuthContext } from '../../context/authContext';

function LoginContainer() {
  const mutation = useMutation((values) => login(values), {
    onSuccess: (data) => {
      setUser({
        data,
        isAuthenticated: true,
        token: data.accessToken,
      });
    },
  });
  const { isError, error } = mutation;

  const { user, setUser } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (user?.isAuthenticated) {
      history.push('/home');
    }
  }, [user?.isAuthenticated]);

  const handleSubmit = (values) => {
    mutation.mutate(values);
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Description of Login" />
      </Helmet>
      <Login
        onHandleSubmit={handleSubmit}
        isError={isError}
        errorMessage={error?.detail}
      />
    </>
  );
}

export default memo(LoginContainer);
