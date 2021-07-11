/**
 *
 * ForgotPasswordContainer
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { ForgotPassword } from '../../components/pages/forgotPassword';
import { forgetPassword } from '../../state/queryFunctions';
import { useAuthContext } from '../../context/authContext';

function ForgotPasswordContainer() {
  const history = useHistory();
  const { user } = useAuthContext();

  const mutationForForgetPassword = useMutation(forgetPassword);
  const { isError, error, isSuccess } = mutationForForgetPassword;

  useEffect(() => {
    if (user?.isAuthenticated) {
      history.push('/home');
    }
  }, [user?.isAuthenticated]);
  const handleSubmit = (values) => {
    mutationForForgetPassword.mutate(values);
  };

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Description of Forgot Password" />
      </Helmet>
      <ForgotPassword
        onHandleSubmit={handleSubmit}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={error?.email[0]}
      />
    </>
  );
}

export default memo(ForgotPasswordContainer);
