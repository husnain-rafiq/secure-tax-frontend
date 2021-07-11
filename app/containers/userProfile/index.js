/**
 *
 * EditUser
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import { getUserById, updateUser } from 'state/queryFunctions';
import { keys } from 'state/queryKeys';
import { Grid } from '@material-ui/core';
import Loading from '../../components/layout/loading';
import EditUserInfo from '../../components/pages/createUser';
import ChangePassword from '../../components/pages/createUser/changePassword';
import { Tab } from '../../components';
import { useAuthContext } from '../../context/authContext';
import PageHeading from '../../components/pageHeading';
import { ROLES } from '../../utils/constants';
import { parseDate } from '../../utils/functions';
import { Toast } from '../../utils/helper';

function EditUser() {
  const queryClient = useQueryClient();
  const history = useHistory();
  const { user, setUser } = useAuthContext();
  const id = user && user.data && user.data.id;
  const userRole = user && user.data && user.data.role;
  const [selectedTabValue, setSelectedTabValue] = React.useState(0);
  const userProfileTabOptions = ['Edit Profile Information', 'Change Password'];
  const { data, isLoading } = useQuery(
    keys.getUser(id),
    () => getUserById(id),
    { refetchOnWindowFocus: false }
  );
  const mutation = useMutation(updateUser, {
    onSuccess: ({
      data: {
        data: { avatar },
      },
    }) => {
      if (avatar) {
        const parsedUserData = { ...user };
        if (parsedUserData.data) {
          parsedUserData.data.avatar = avatar;
          setUser(parsedUserData);
        }
      }

      history.push({
        pathname: '/directory',
        state: {
          showToast: true,
          toastType: 'success',
          message: `User Updated Successfully`,
        },
      });

      queryClient.removeQueries(keys.getUser(id));
    },
    onError: ({
      response: {
        data: { message },
      },
    }) => {
      Toast({
        icon: 'error',
        title: message || 'Error while Updating',
      });
    },
  });

  const initialData = data?.data?.data || null;
  const handleSubmit = (updatedData) => {
    const payload = { id, updatedData };
    mutation.mutate(payload);
  };
  const handleChangeTab = (entry, newValue) => {
    setSelectedTabValue(newValue);
  };
  let formDefaultData = {};

  if (initialData) {
    initialData.password = '';
    initialData.confirmPassword = '';
    if (initialData.avatar && !initialData.avatar.includes('http'))
      initialData.avatar = process.env.API_ASSETS_URL + initialData.avatar;

    if (initialData.joiningDate) {
      initialData.joiningDate = parseDate(initialData.joiningDate);
    }
    if (initialData.dob) {
      initialData.dob = parseDate(initialData.dob);
    }

    if (!initialData.role) {
      initialData.role = userRole;
    }
  } else if (userRole === ROLES.USER) {
    formDefaultData = { password: '' }; // User can only edit his password and avatar in profile
  } else if (userRole === ROLES.ADMIN) {
    formDefaultData = {
      firstName: '',
      lastName: '',
      password: '',
      contactNo: '',
      department: '',
      location: '',
      title: '',
      email: '',
      extension: '',
      status: '',
      joiningDate: null,
      dob: null,
      avatar: '',
      role: userRole,
    };

    formDefaultData.isProfilePicAttached = false;
  }
  return (
    <>
      <Helmet>
        <title>Edit User</title>
        <meta name="updateUser" content="sto - update user data" />
      </Helmet>

      {isLoading ? (
        <Loading />
      ) : (
        <Grid xs={12}>
          <Grid>
            <PageHeading heading="Edit Profile" />
          </Grid>
          <Grid>
            <Tab
              handleChange={handleChangeTab}
              value={selectedTabValue}
              tabOptions={userProfileTabOptions}
            />
          </Grid>
          <Grid>
            {selectedTabValue === 0 ? (
              <EditUserInfo
                mutation={mutation}
                initialData={initialData || formDefaultData}
                onUpdateUser={handleSubmit}
                formType="edit"
                editRole={userRole}
                isThisMyProfile
              />
            ) : (
              <ChangePassword
                mutation={mutation}
                initialData={initialData || formDefaultData}
                onUpdateUser={handleSubmit}
                formType="edit"
                editRole={userRole}
                isThisMyProfile
              />
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
}
export default memo(EditUser);
