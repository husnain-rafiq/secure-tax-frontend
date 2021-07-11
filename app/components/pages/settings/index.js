import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { Input, Tab, Select, DataTable } from 'components';
import PageHeading from '../../pageHeading';
import Button from '../../muiButton';
import { columns } from './columns';
import Loading from '../../loading';

const useStyles = makeStyles((theme) => ({
  selectionArea: {
    marginTop: theme.spacing(4),
    gridGap: theme.spacing(4),
    display: 'flex',
  },
  addUserbutton: {
    marginTop: theme.spacing(5),
  },
  filePath: {
    backgroundColor: theme.palette.background.secondary,
  },
  userRolesTable: {
    marginTop: theme.spacing(4),
  },
}));
function SettingsPage({
  searchUsersInitialValue,
  dropDownUserRoles,
  onHandleSubmit,
  userData,
  isLoading,
  rowCount,
  rowsPerPage,
  handleServerPageNumber,
  pageNumber,
  handleServerPageSize,
}) {
  const classes = useStyles();
  const history = useHistory();
  const [selectedTabValue] = React.useState(0);
  const SettingsTabOptions = ['User Management'];

  return (
    <>
      <Grid xs={12}>
        <Grid>
          <PageHeading heading="Settings" />
        </Grid>
        <Grid>
          <Tab value={selectedTabValue} tabOptions={SettingsTabOptions} />
        </Grid>
        <Formik
          initialValues={searchUsersInitialValue}
          onSubmit={onHandleSubmit}
        >
          {({ values }) => (
            <Form>
              <Grid container className={classes.selectionArea}>
                <Grid item xs={12} sm={3}>
                  <Select
                    name="role"
                    selectedValue={values.role}
                    options={dropDownUserRoles}
                    placeholder="All"
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Input
                    name="query"
                    variant="outlined"
                    appendIcon
                    placeholder="Search"
                    Icon={SearchIcon}
                  />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <Button
                    type="submit"
                    fullWidth
                    value="Search"
                    color="primary"
                  />
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>

        <Grid className={classes.addUserbutton}>
          <Button
            value="Add New User"
            color="primary"
            onClick={() => history.push('/settings/addNewUser')}
            startIcon={<AddIcon />}
          />
        </Grid>
        {!userData?.length && !isLoading ? (
          <Box mt={6}>
            <Alert severity="info">No Record Found</Alert>
          </Box>
        ) : (
          <Grid className={classes.userRolesTable}>
            {!isLoading ? (
              <DataTable
                rows={userData || []}
                columns={columns}
                rowCount={rowCount}
                tableRowsPerPage={rowsPerPage}
                handleServerPageNumber={handleServerPageNumber}
                pageNumber={pageNumber}
                handleServerPageSize={handleServerPageSize}
              />
            ) : (
              <Loading />
            )}
          </Grid>
        )}
      </Grid>
    </>
  );
}
export default SettingsPage;
