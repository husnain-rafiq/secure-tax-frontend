import React, { useState } from 'react';
import { Box, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { MuiFileInput } from 'components/muiFileInput';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { FILE_ACCEPT_TYPES } from 'utils/constants';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Input, Select } from 'components';
import Button from '../../muiButton';
import avatar from '../../../images/avatar.jpg';
import { userFormValidaton } from './userFormValidation';
import { TextMaskForContactNo } from '../../maskForContactNo/textMaskForContactNo';

const useStyles = makeStyles(() => ({
  imageStyle: {
    width: '290px',
    height: '290px',
  },
}));
const AddNewUserForm = ({
  initialValues,
  dropDownUserRoles,
  onHandleSubmit,
  isLoading,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setshowPassword] = useState(false);
  const [imgFile, setImgFile] = useState(avatar || null);
  const handleSubmitUser = async (values) => {
    const data = values;
    if (data.phone) data.phone = data.phone.replace(/[{()}]| |-|_/g, '');
    const dataFile = new FormData();
    if (data.username) dataFile.append('username', data.username);
    if (data.firstName) dataFile.append('first_name', data.firstName);
    if (data.lastName) dataFile.append('last_name', data.lastName);
    if (data.phone) dataFile.append('phone', data.phone);
    if (data.email) dataFile.append('email', data.email);
    if (data.address) dataFile.append('address', data.address);
    if (data.password) dataFile.append('password', data.password);
    if (data.confirmPassword)
      dataFile.append('confirmPassword', data.confirmPassword);

    if (data?.photo) {
      dataFile.append('photo', data.photo);
    }
    if (data.role) {
      dataFile.append('role', data.role);
    }
    await onHandleSubmit(dataFile);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitUser}
      validationSchema={userFormValidaton}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Box width={[1, 1, 1, '55%']}>
              <Box width={1} flexWrap="wrap" display="flex">
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="User Name *"
                    name="username"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="Email Address *  "
                    name="email"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="First Name *"
                    name="firstName"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="Last Name *"
                    name="lastName"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="Password *"
                    name="password"
                    variant="outlined"
                    disabled={isLoading}
                    inputType={`${showPassword ? 'text' : 'password'}`}
                    onIconClick={() => {
                      setshowPassword(!showPassword);
                    }}
                    Icon={showPassword ? VisibilityIcon : VisibilityOffIcon}
                    appendIcon
                    IconClickable
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="Confirm Password *"
                    name="confirmPassword"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="Phone Number *"
                    name="phone"
                    variant="outlined"
                    inputComponent={TextMaskForContactNo}
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Select
                    name="role"
                    label="Role *"
                    selectedValue={values.role}
                    options={dropDownUserRoles}
                    disabled={isLoading}
                  />
                </Box>
                <Box width={[1, 1, 1 / 2]} mt={5} pr={3}>
                  <Input
                    label="Address *"
                    name="address"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </Box>
                <Box display="flex" flexWrap="wrap" width={1} mt={8}>
                  <Box flex="0.2" mr={5}>
                    <Button
                      value="Cancel"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      onClick={() => history.push('/settings')}
                    />
                  </Box>
                  <Box flex="0.2">
                    <Button
                      value="Add User"
                      type="submit"
                      disabled={isLoading}
                      variant="contained"
                      color="secondary"
                      fullWidth
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box width={[1, 1, 1, '40%']} mt={[0, 14]} alignSelf="flex-start">
              <Box width={1} flexDirection="column" display="flex">
                <Box width={1} display="flex" justifyContent="center">
                  <Avatar
                    variant="square"
                    src={imgFile}
                    className={classes.imageStyle}
                  />
                </Box>
                <Box display="flex" justifyContent="center">
                  <MuiFileInput
                    name="photo"
                    isLoading={isLoading}
                    setImgFile={setImgFile}
                    setFieldValue={setFieldValue}
                    acceptTypes={FILE_ACCEPT_TYPES.imageFiles}
                    buttonText="Upload Image"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default AddNewUserForm;
