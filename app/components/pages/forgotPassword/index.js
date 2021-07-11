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
import Button from '@material-ui/core/Button';
import { Form, Formik } from 'formik';
import Alert from '@material-ui/lab/Alert';
import { Input } from '../../index';
import { forgotPasswordSchema } from '../../../containers/forgotPassword/schema';
import useStyles from './style';
import { H3 } from '../../typography';
import Link from '../../link';

export function ForgotPassword({
  onHandleSubmit,
  isError,
  errorMessage,
  isSuccess,
}) {
  const classes = useStyles();
  return (
    <Box className={classes.bgContainer} h="100%" width={1}>
      <Container component="main" maxWidth="xs">
        <Box className={classes.loginContainer}>
          <Box className={classes.welcomBox}>
            <H3 color="light">Forgot Password</H3>
          </Box>
          <Formik
            initialValues={{
              email: '',
            }}
            validationSchema={forgotPasswordSchema}
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
                      Email has been sent successfully
                    </Alert>
                  </Box>
                )}
                <Box mt={isError || isSuccess ? 10 : 20}>
                  <Input
                    name="email"
                    placeholderText="Email"
                    Icon={MailOutlineIcon}
                    appendIcon
                    IconClickable={false}
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
                    Next
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

export default memo(ForgotPassword);
