/**
 *
 * login
 *
 */

import React, { memo } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from '@material-ui/core/Button';
import { Form, Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import { Input } from '../../index';
import { resetPasswprdSchema } from '../../../containers/resetPassword/schema';
import useStyles from './style';
import { H3 } from '../../typography';
import Link from '../../link';

export function ResetPassword({
  onHandleSubmit,
  isError,
  isSuccess,
  errorMessage,
  onShowNewPassword,
  onShowNewConfirmPassword,
  onHandleClickShowNewPassword,
  onHandleClickShowNewConfirmPassword,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.bgContainer} h="100%" width={1}>
      <Container component="main" maxWidth="xs">
        <Box className={classes.loginContainer}>
          <Box className={classes.welcomBox}>
            <H3 color="light">Reset Password</H3>
          </Box>
          <Formik
            initialValues={{
              password: '',
              confirmpassword: '',
            }}
            validationSchema={resetPasswprdSchema}
            onSubmit={(values) => {
              onHandleSubmit(values);
            }}
          >
            <Form>
              <Paper className={classes.loginBox}>
                {isError && (
                  <Box mt={12} textAlign="center">
                    <Alert severity="error">{errorMessage}</Alert>
                  </Box>
                )}
                {isSuccess && (
                  <Box mt={12} textAlign="center">
                    <Alert severity="success">
                      Password updated successfully
                    </Alert>
                  </Box>
                )}
                <Box mt={isSuccess || isError ? 10 : 20}>
                  <Input
                    name="password"
                    type={onShowNewPassword ? 'text' : 'password'}
                    placeholderText="New Password"
                    Icon={onShowNewPassword ? VisibilityIcon : VisibilityOff}
                    appendIcon
                    onIconClick={onHandleClickShowNewPassword}
                    IconClickable="true"
                  />
                </Box>
                <Box mt={20}>
                  <Input
                    name="confirmpassword"
                    type={onShowNewConfirmPassword ? 'text' : 'password'}
                    placeholderText="Confirm New Password"
                    Icon={
                      onShowNewConfirmPassword ? VisibilityIcon : VisibilityOff
                    }
                    appendIcon
                    onIconClick={onHandleClickShowNewConfirmPassword}
                    IconClickable="true"
                  />
                </Box>
                <Box mt={15} className={classes.centerAlign}>
                  <Button
                    className={classes.loginBtn}
                    fullWidth={false}
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Reset
                  </Button>
                </Box>
                <Box mt={5} className={classes.centerAlign}>
                  <Link to="/" value="Back to Login" />
                </Box>
              </Paper>
            </Form>
          </Formik>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(ResetPassword);
