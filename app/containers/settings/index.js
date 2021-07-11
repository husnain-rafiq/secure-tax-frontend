/**
 *
 * Home
 *
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useQuery } from 'react-query';
import SettingsPage from '../../components/pages/settings/loadable';
import { useAuthContext } from '../../context/authContext';
import { PAGE_SIZE, DROP_DOWN_USER_ROLES } from '../../utils/constants';
import { keys } from '../../state/queryKeys';
import { fetchUsers } from '../../state/queryFunctions';

function Settings() {
  const { user } = useAuthContext();
  const history = useHistory();
  const [searchUsersInitialValue, setsearchUsersInitialValue] = useState({
    role: '',
    query: '',
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const dropDownUserRoles = DROP_DOWN_USER_ROLES;
  const handleSubmit = (values) => {
    setsearchUsersInitialValue(values);
  };
  const { data, isLoading } = useQuery(
    keys.getUsers({
      searchUsersInitialValue,
      page,
      pageSize,
    }),
    fetchUsers
  );
  const handleServerPageNumber = (value) => {
    setPage(value);
  };
  const handleServerPageSize = (value) => {
    setPageSize(value);
  };
  const userData = data?.results;
  const count = data?.count;
  useEffect(() => {
    if (!user || !user.isAuthenticated) {
      history.push('/');
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Settings</title>
        <meta name="description" content="Description of Settings" />
      </Helmet>
      <SettingsPage
        searchUsersInitialValue={searchUsersInitialValue}
        rowsPerPage={pageSize}
        dropDownUserRoles={dropDownUserRoles}
        onHandleSubmit={handleSubmit}
        userData={userData}
        rowCount={count}
        isLoading={isLoading}
        handleServerPageNumber={handleServerPageNumber}
        pageNumber={page}
        handleServerPageSize={handleServerPageSize}
      />
    </>
  );
}

export default memo(Settings);
