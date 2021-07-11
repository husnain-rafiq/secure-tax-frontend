import { Box, Grid } from '@material-ui/core';
import React from 'react';
import PageHeading from '../../pageHeading';
import { Tab } from '../../index';
import ChangePassword from './changePassword';
import EditProfileInformation from './editProfileInformation';

function EditUserProfile({
  initialData,
  onHandleSubmit,
  mutationForPasswordUpdate,
}) {
  const [selectedTabValue, setSelectedTabValue] = React.useState(0);
  const EditProfileTabOptions = [
    'Edit Profile Information',
    'Change Password ',
  ];
  const handleChangeTab = (entry, newValue) => {
    setSelectedTabValue(newValue);
  };

  return (
    <Grid xs={12}>
      <Box>
        <PageHeading heading="Edit Profile" />
      </Box>
      <Box>
        <Tab
          handleChange={handleChangeTab}
          value={selectedTabValue}
          tabOptions={EditProfileTabOptions}
        />
      </Box>
      {selectedTabValue === 0 ? (
        <EditProfileInformation
          initialData={initialData}
          onHandleSubmit={onHandleSubmit}
        />
      ) : (
        <ChangePassword mutationForPasswordUpdate={mutationForPasswordUpdate} />
      )}
    </Grid>
  );
}
export default EditUserProfile;
