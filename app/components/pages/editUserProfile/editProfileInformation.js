import { Box, Grid, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import { MuiFileInput } from 'components/muiFileInput';
import { FILE_ACCEPT_TYPES, ROLES } from 'utils/constants';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Input, Button } from '../../index';
import { H4 } from '../../typography';
import { navigateTo } from '../../../utils/helper';
import { useAuthContext } from '../../../context/authContext';
import { TextMaskForContactNo } from '../../maskForContactNo/textMaskForContactNo';
import { userFormValidaton } from './userFormValidation';

const useStyles = makeStyles(() => ({
  imageStyle: {
    width: '290px',
    height: '290px',
  },
}));
function EditProfileInformation({ initialData, onHandleSubmit }) {
  const classes = useStyles();
  const { user } = useAuthContext();
  const userRole = user?.data?.roleLabel;
  const [imgFile, setImgFile] = useState(
    (initialData && initialData.photo) || null
  );
  const history = useHistory();
  const role = initialData?.roleLabel;

  const createFormObject = (values) => {
    const data = values;
    if (data.phone) data.phone = data.phone.replace(/[{()}]| |-|_/g, '');
    const dataFile = new FormData();
    if (data.username) dataFile.append('username', data.username);
    if (data.firstName) dataFile.append('first_name', data.firstName);
    if (data.lastName) dataFile.append('last_name', data.lastName);
    if (data.phone) dataFile.append('phone', data.phone);
    if (data.email) dataFile.append('email', data.email);
    if (data.address) dataFile.append('address', data.address);
    if (data?.file) {
      dataFile.append('photo', data.file);
    }
    if (data.role) {
      dataFile.append('role', data.role);
    }

    return dataFile;
  };

  const handleSubmitUser = async (values) => {
    const dataFile = createFormObject(values);
    await onHandleSubmit(dataFile);
  };

  return (
    <Grid xs={12}>
      <Formik
        initialValues={initialData}
        onSubmit={handleSubmitUser}
        validationSchema={userFormValidaton}
      >
        {({ setFieldValue }) => (
          <Form>
            <Box mt={5}>
              <H4>{userRole}</H4>
            </Box>
            <Box display="flex">
              <Box mt={4} display="flex" width="60%" flexWrap="wrap">
                <Box mr={[0, 2]} width={['100%', '46%']} mt={6}>
                  <Input
                    name="username"
                    variant="outlined"
                    label="User Name"
                    isDisabled={
                      role === ROLES.BALANCINGAGENT ||
                      role === ROLES.COLLECTINGAGENT
                    }
                  />
                </Box>
                <Box ml={[0, 2]} width={['100%', '46%']} mt={6}>
                  <Input
                    name="email"
                    variant="outlined"
                    label="Email Address"
                    isDisabled={
                      role === ROLES.BALANCINGAGENT ||
                      role === ROLES.COLLECTINGAGENT
                    }
                  />
                </Box>
                <Box mr={[0, 2]} width={['100%', '46%']} mt={6}>
                  <Input
                    name="firstName"
                    variant="outlined"
                    label="First Name"
                    isDisabled={
                      role === ROLES.BALANCINGAGENT ||
                      role === ROLES.COLLECTINGAGENT
                    }
                  />
                </Box>
                <Box ml={[0, 2]} width={['100%', '46%']} mt={6}>
                  <Input
                    name="lastName"
                    variant="outlined"
                    label="Last Name"
                    isDisabled={
                      role === ROLES.BALANCINGAGENT ||
                      role === ROLES.COLLECTINGAGENT
                    }
                  />
                </Box>
                <Box mr={[0, 2]} width={['100%', '46%']} mt={6}>
                  <Input
                    name="phone"
                    variant="outlined"
                    label="Phone Number"
                    inputComponent={TextMaskForContactNo}
                    isDisabled={
                      role === ROLES.BALANCINGAGENT ||
                      role === ROLES.COLLECTINGAGENT
                    }
                  />
                </Box>
                <Box ml={[0, 2]} width={['100%', '46%']} mt={6}>
                  <Input
                    name="address"
                    variant="outlined"
                    label="Address"
                    isDisabled={
                      role === ROLES.BALANCINGAGENT ||
                      role === ROLES.COLLECTINGAGENT
                    }
                  />
                </Box>
                <Box display="flex" mt={5}>
                  <Box>
                    <Button
                      onClick={() => {
                        navigateTo(history, '/');
                      }}
                      value="Cancel"
                    />
                  </Box>
                  <Box ml={4}>
                    <Button type="submit" value="Update" />
                  </Box>
                </Box>
              </Box>
              <Box width="30%" mt={12} display="flex" flexDirection="column">
                <Box display="flex" justifyContent="center">
                  <Avatar
                    variant="rounded"
                    src={imgFile}
                    className={classes.imageStyle}
                  />
                </Box>
                <MuiFileInput
                  name="file"
                  setImgFile={setImgFile}
                  setFieldValue={setFieldValue}
                  acceptTypes={FILE_ACCEPT_TYPES.imageFiles}
                  buttonText="Upload Image"
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default EditProfileInformation;
