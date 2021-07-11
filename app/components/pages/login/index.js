/**
 *
 * login
 *
 */

import React, { memo } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import { Form, Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import { Input } from '../../index';
import { loginSchema } from '../../../containers/login/schema';
import Logo from '../../../images/logo.png';
import useStyles from './style';
import Link from '../../link';

export function Login({ onHandleSubmit, isError, errorMessage }) {
  const classes = useStyles();
  return (
    <Box className={classes.bgContainer} h="100%" width={1}>
      <Container component="main" maxWidth="xs">
        <Box className={classes.loginContainer}>
          <Box className={classes.welcomBox}>
            <img
              src={Logo}
              alt="secure tax office logo"
              className={classes.logoStyle}
            />{' '}
          </Box>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              onHandleSubmit(values);
            }}
          >
            <Form>
              <Paper className={classes.loginBox}>
                {isError && (
                  <Box mt={6} textAlign="center">
                    <Alert severity="error">{errorMessage}</Alert>
                  </Box>
                )}
                <Box mt={15}>
                  <Input
                    name="email"
                    placeholderText="Email"
                    Icon={MailOutlineIcon}
                    appendIcon
                    IconClickable={false}
                  />
                </Box>
                <Box my={15}>
                  <Input
                    type="password"
                    name="password"
                    placeholderText="Password"
                    Icon={LockIcon}
                    appendIcon
                    IconClickable={false}
                  />
                </Box>
                <Box mb={2} className={classes.centerAlign}>
                  <Button
                    className={classes.loginBtn}
                    fullWidth={false}
                    variant="contained"
                    color="secondary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Box>
                <Box className={classes.centerAlign}>
                  <Link to="/forgot-password" value="Forgot Password?" />
                </Box>
              </Paper>
            </Form>
          </Formik>
        </Box>
      </Container>
    </Box>
  );
}

export default memo(Login);
