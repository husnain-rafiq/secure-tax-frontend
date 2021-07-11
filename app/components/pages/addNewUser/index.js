import React from 'react';
import { Grid } from '@material-ui/core';
import { Tab } from 'components';
import PageHeading from '../../pageHeading';
import AddNewUserForm from './addNewUserForm';

const AddNewUser = ({
  initialValues,
  dropDownUserRoles,
  onHandleSubmit,
  isLoading,
}) => {
  const SettingsTabOptions = ['User Management'];
  const [selectedTabValue] = React.useState(0);

  return (
    <Grid container direction="column">
      <Grid>
        <PageHeading heading="Settings" />
      </Grid>
      <Grid>
        <Tab value={selectedTabValue} tabOptions={SettingsTabOptions} />
      </Grid>
      <Grid>
        <AddNewUserForm
          initialValues={initialValues}
          dropDownUserRoles={dropDownUserRoles}
          onHandleSubmit={onHandleSubmit}
          isLoading={isLoading}
        />
      </Grid>
    </Grid>
  );
};

export default AddNewUser;
