import { Box } from '@material-ui/core';
import { Input, Button } from 'components';
import { Form, Formik } from 'formik';
import React, { useRef, useEffect, useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router-dom';
import { H4 } from '../../typography';
import { useAuthContext } from '../../../context/authContext';
import { changePasswordValidation } from './changePasswordValidation';
import { navigateTo } from '../../../utils/helper';

function ChangePassword({ mutationForPasswordUpdate }) {
  const history = useHistory();
  const formikRef = useRef();
  const [showPassword, setshowPassword] = useState(false);
  const { user } = useAuthContext();

  const userRole = user?.data?.role_label;

  useEffect(() => {
    if (mutationForPasswordUpdate.isSuccess) {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
    }
  }, [mutationForPasswordUpdate.isSuccess]);

  const handlePasswordUpdate = async (values) => {
    const data = values;
    const updatedPassword = new FormData();
    if (data.currentPassword) {
      updatedPassword.append('old_password', data.currentPassword);
    }
    if (data.newPassword) {
      updatedPassword.append('new_password', data.newPassword);
    }
    await mutationForPasswordUpdate.mutate(updatedPassword);
  };

  return (
    <>
      <Formik
        initialValues={{
          currentPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        }}
        onSubmit={handlePasswordUpdate}
        innerRef={formikRef}
        validationSchema={changePasswordValidation}
      >
        {() => (
          <Form>
            <Box mt={5}>
              <H4>{userRole}</H4>
            </Box>
            <Box
              mt={4}
              display="flex"
              width="100%"
              flexDirection={['column', 'column', 'row']}
            >
              <Box mr={[0, 0, 2]} mt={6} width="30%">
                <Input
                  name="currentPassword"
                  variant="outlined"
                  label="Current Password*"
                  appendIcon
                  IconClickable
                  onIconClick={() => {
                    setshowPassword(!showPassword);
                  }}
                  Icon={showPassword ? VisibilityOffIcon : VisibilityIcon}
                  inputType={`${showPassword ? 'text' : 'password'}`}
                />
              </Box>
              <Box mx={[0, 0, 2]} mt={6} width="30%">
                <Input
                  name="newPassword"
                  variant="outlined"
                  label="New Password*"
                  appendIcon
                  IconClickable
                  onIconClick={() => {
                    setshowPassword(!showPassword);
                  }}
                  Icon={showPassword ? VisibilityOffIcon : VisibilityIcon}
                  inputType={`${showPassword ? 'text' : 'password'}`}
                />
              </Box>
              <Box mx={[0, 0, 2]} mt={6} width="30%">
                <Input
                  name="confirmNewPassword"
                  variant="outlined"
                  label="Confirm New Password*"
                  appendIcon
                  IconClickable
                  onIconClick={() => {
                    setshowPassword(!showPassword);
                  }}
                  Icon={showPassword ? VisibilityOffIcon : VisibilityIcon}
                  inputType={`${showPassword ? 'text' : 'password'}`}
                />
              </Box>
              <Box
                display="flex"
                mx={[0, 0, 2]}
                mt={6}
                width="20%"
                alignItems="flex-end"
              >
                <Box>
                  <Button
                    value="Cancel"
                    onClick={() => {
                      navigateTo(history, '/');
                    }}
                  />
                </Box>
                <Box ml={4}>
                  <Button value="Update" type="submit" />
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ChangePassword;
