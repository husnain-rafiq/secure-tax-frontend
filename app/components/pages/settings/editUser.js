import React from 'react';
import { Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Input, Select } from 'components';
import InputBox from './inputBox';
import Button from '../../muiButton';
import { DROP_DOWN_USER_ROLES } from '../../../utils/constants';
import { userFormValidaton } from './userFormValidation';
import { TextMaskForContactNo } from '../../maskForContactNo/textMaskForContactNo';

const EditUser = ({
  initialValues,
  openEditUserDialogue,
  onHandleSubmit,
  isLoading,
}) => {
  const dropDownUserRoles = DROP_DOWN_USER_ROLES;
  const handleSubmitUser = async (values) => {
    const data = values;
    const { id } = data;
    if (data.phone) data.phone = data.phone.replace(/[{()}]| |-|_/g, '');
    const dataFile = new FormData();
    if (data.username) dataFile.append('username', data.username);
    if (data.first_name) dataFile.append('first_name', data.first_name);
    if (data.last_name) dataFile.append('last_name', data.last_name);
    if (data.phone) dataFile.append('phone', data.phone);
    if (data.email) dataFile.append('email', data.email);
    if (data.address) dataFile.append('address', data.address);
    if (data.role) {
      dataFile.append('role', data.role);
    }
    await onHandleSubmit(dataFile, id);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userFormValidaton}
      onSubmit={handleSubmitUser}
    >
      {() => (
        <Form>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            display="flex"
            justifyContent="left"
            alignItems="center"
          >
            <Box width={1}>
              <Box
                width={1}
                flexWrap="wrap"
                display="flex"
                px={[0, 0, 15]}
                pb={10}
              >
                <InputBox>
                  <Input
                    label="User Name *"
                    name="username"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </InputBox>
                <InputBox>
                  <Input
                    label="Email Address *  "
                    name="email"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </InputBox>
                <InputBox>
                  <Input
                    label="First Name *"
                    name="first_name"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </InputBox>
                <InputBox>
                  <Input
                    label="Last Name *"
                    name="last_name"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </InputBox>

                <InputBox>
                  <Input
                    label="Phone Number *"
                    name="phone"
                    inputComponent={TextMaskForContactNo}
                    variant="outlined"
                    disabled={isLoading}
                  />
                </InputBox>
                <InputBox>
                  <Select
                    name="role"
                    label="Role *"
                    options={dropDownUserRoles}
                    disabled={isLoading}
                  />
                </InputBox>
                <InputBox>
                  <Input
                    label="Address *"
                    name="address"
                    variant="outlined"
                    disabled={isLoading}
                  />
                </InputBox>
                <Box display="flex" flexWrap="wrap" width={1} mt={8}>
                  <Box flex="0.15" mr={5}>
                    <Button
                      value="Cancel"
                      variant="contained"
                      color="secondary"
                      onClick={openEditUserDialogue}
                      fullWidth
                    />
                  </Box>
                  <Box flex="0.15">
                    <Button
                      value="Update"
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
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default EditUser;
