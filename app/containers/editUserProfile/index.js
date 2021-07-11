/**
 *
 * EditUserProfile
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getUserById, updateUser, changePassword } from 'state/queryFunctions';
import { keys } from 'state/queryKeys';
import { useAuthContext } from '../../context/authContext';
import { ROLES } from '../../utils/constants';
import { Toast } from '../../utils/helper';
import EditUserProfilePage from '../../components/pages/editUserProfile';
import Loading from '../../components/loading/index';

function EditUserProfile() {
  const queryClient = useQueryClient();
  const { user, setUser } = useAuthContext();

  const id = user?.data?.id;
  const userRole = user?.data?.role;
  const { data, isLoading } = useQuery(keys.getUser(id), () => getUserById(id));

  const mutationForProfileUpdate = useMutation(updateUser, {
    onSuccess: ({
      username,
      firstName,
      lastName,
      address,
      photo,
      phone,
      email,
    }) => {
      if (user.data) {
        const parsedUserData = {
          ...user,
          data: {
            ...user.data,
            firstName,
            lastName,
            username,
            email,
            photo,
            phone,
            address,
          },
        };
        setUser(parsedUserData);
      }

      Toast({
        icon: 'success',
        title: `User Updated Successfully`,
      });
      queryClient.removeQueries(keys.getUser(id));
    },
    onError: (response) => {
      const errorResponseList = Object.values(response);
      Toast({
        icon: 'error',
        title: errorResponseList[0] || 'Error while Updating',
      });
    },
  });

  const initialData = (data && data) || null;

  const handleSubmit = (updatedData) => {
    const payload = { userId: id, updatedData };
    mutationForProfileUpdate.mutate(payload);
  };
  let formDefaultData = {};

  if (userRole === ROLES.ADMIN) {
    formDefaultData = {
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      phone: '',
      email: '',
      photo: '',
      address: '',
      role: userRole,
    };
  }

  const mutationForPasswordUpdate = useMutation(changePassword, {
    onSuccess: () => {
      Toast({
        icon: 'success',
        title: `Password Updated Successfully`,
      });
    },
    onError: (response) => {
      const errorResponseList = Object.values(response);
      Toast({
        icon: 'error',
        title: errorResponseList[0] || 'Error while Updating Password',
      });
    },
  });

  return (
    <>
      <Helmet>
        <title>EditUserProfile</title>
        <meta name="description" content="Description of EditUserProfile" />
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <EditUserProfilePage
          initialData={initialData || formDefaultData}
          onHandleSubmit={handleSubmit}
          mutationForPasswordUpdate={mutationForPasswordUpdate}
        />
      )}
    </>
  );
}

export default EditUserProfile;
