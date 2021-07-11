import React, { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import AddNewUserPage from '../../components/pages/addNewUser';
import { useAuthContext } from '../../context/authContext';
import { DROP_DOWN_USER_ROLES } from '../../utils/constants';
import { createUser } from '../../state/queryFunctions';
import { navigateTo, Toast } from '../../utils/helper';

const AddNewUser = () => {
  const { user } = useAuthContext();
  const history = useHistory();
  const defaultData = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
    address: '',
    photo: undefined,
  };
  const dropDownUserRoles = DROP_DOWN_USER_ROLES;
  const mutation = useMutation(createUser, {
    onSuccess: () => {
      Toast({
        icon: 'success',
        title: `User Created Successfully`,
      });
      navigateTo(history, '/settings');
    },
    onError: (response) => {
      const errorResponseList = Object.values(response);
      Toast({
        icon: 'error',
        title: errorResponseList[0] || 'Error while Creating',
      });
    },
  });
  const handleSubmit = (payload) => {
    mutation.mutate(payload);
  };
  const { isLoading } = mutation;
  useEffect(() => {
    if (!user || !user.isAuthenticated) {
      history.push('/');
    }
  }, [user]);
  return (
    <AddNewUserPage
      initialValues={defaultData}
      dropDownUserRoles={dropDownUserRoles}
      isLoading={isLoading}
      onHandleSubmit={handleSubmit}
    />
  );
};

export default AddNewUser;
