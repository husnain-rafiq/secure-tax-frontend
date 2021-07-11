/**
 *
 * ForgotPasswordContainer
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { ResetPassword } from '../../components/pages/resetPassword';
import { resetPassword } from '../../state/queryFunctions';
import { useAuthContext } from '../../context/authContext';

function ResetPasswordContainer(props) {
  const { search } = props.location;
  const params = new URLSearchParams(search);
  const token = params.get('token');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfirmPassword, setShowNewConfirmPassword] = useState(false);

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const handleClickShowNewConfirmPassword = () => {
    setShowNewConfirmPassword(!showNewConfirmPassword);
  };
  const mutationForResetPassword = useMutation(resetPassword);
  const { isError, error, isSuccess } = mutationForResetPassword;

  const { user } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    if (user?.isAuthenticated) {
      history.push('/home');
    }
  }, [user?.isAuthenticated]);
  const handleSubmit = (values) => {
    const resetPasswordObject = { ...values, token };
    mutationForResetPassword.mutate(resetPasswordObject);
  };
  return (
    <>
      <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="Description of Reset Password" />
      </Helmet>
      <ResetPassword
        onShowNewPassword={showNewPassword}
        onHandleClickShowNewPassword={handleClickShowNewPassword}
        onShowNewConfirmPassword={showNewConfirmPassword}
        onHandleClickShowNewConfirmPassword={handleClickShowNewConfirmPassword}
        onHandleSubmit={handleSubmit}
        isSuccess={isSuccess}
        isError={isError}
        errorMessage={error?.status || error?.token}
      />
    </>
  );
}

export default memo(ResetPasswordContainer);
