import { Box, Grid } from '@material-ui/core';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/styles';
import PageHeading from '../../pageHeading';
import { Button, Tab, DataTable } from '../../index';
import { columns, taxPayerDetailsColumn } from './columns';
import { rows, taxPayerDetailsRow } from './rows';
import { BodyTextLarge, BodyTextSmall } from '../../typography';

const useStyles = makeStyles(() => ({
  typography: {
    fontWeight: 700,
  },
}));
function TaxRecordDetail() {
  const [selectedTabValue] = React.useState(0);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const SettingsTabOptions = [
    'History',
    'Tax Notice Details',
    'UDF / Attachments',
    'Other Owners',
    'Notifications',
  ];
  const classes = useStyles();

  return (
    <Grid xs={12}>
      <Box display="flex" justifyContent="space-between">
        <PageHeading heading="Tax Records & Payments" />
        <BodyTextLarge>Current Batch : 123</BodyTextLarge>
      </Box>
      <Box>
        <DataTable
          columns={taxPayerDetailsColumn}
          rows={taxPayerDetailsRow}
          hideFooter
        />
      </Box>
      <Box my={4}>
        <Button value="Download and Print Receipt" />
      </Box>
      <Box>
        <Tab value={selectedTabValue} tabOptions={SettingsTabOptions} />
      </Box>
      <Box mt={5}>
        <DataTable columns={columns} rows={rows} hideFooter height="300px" />
      </Box>
      <Box mt={4} display="flex">
        <Box flex={1}>
          <Button value="Summary" />
        </Box>
        <Box mr={3} alignSelf="center">
          <BodyTextSmall className={classes.typography}>
            Override Tax Notice Due Date
          </BodyTextSmall>
        </Box>
        <Box>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              id="date-picker-inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Box>
    </Grid>
  );
}

export default TaxRecordDetail;
