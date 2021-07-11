import { Box, Grid, RadioGroup } from '@material-ui/core';
import React from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form, Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import PageHeading from '../../pageHeading';
import { Button, Tab, Input, H3, DataTable } from '../../index';
import theme from '../../../theme';
import { BodyTextLarge } from '../../typography';
import { colors } from '../../../theme/colors';
import { taxPayerDetailsColumn } from './columns';
import { taxPayerDetailsRow } from './rows';

const useStyles = makeStyles(() => ({
  disableColor: {
    backgroundColor: colors.disable,
  },
}));
function TaxRecordDetailUnpaid() {
  const [selectedTabValue] = React.useState(0);
  const [value, setValue] = React.useState('cash');
  const [checkBoxValue, setBoxValue] = React.useState(false);

  const SettingsTabOptions = [
    'Payment',
    'History',
    'Tax Notice Details',
    'UDF / Attachments',
    'Notifications',
  ];
  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };
  const handleChange = () => {
    setBoxValue(!checkBoxValue);
  };
  const onHandleSubmit = () => {};

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
        <Button value="Print Corrected Notice" />
      </Box>
      <Box>
        <Tab value={selectedTabValue} tabOptions={SettingsTabOptions} />
      </Box>
      <Formik
        onSubmit={(values) => {
          onHandleSubmit(values);
        }}
      >
        {() => (
          <Form>
            <Box bgcolor={colors.background.light} boxShadow={1} pb={5} px={5}>
              <Box mb={6} pt={4}>
                <RadioGroup value={value} onChange={handleRadioChange}>
                  <Box display="flex">
                    <FormControlLabel
                      value="check"
                      control={<Radio />}
                      label="Check"
                    />
                    <FormControlLabel
                      value="cash"
                      control={<Radio />}
                      label="Cash"
                    />
                  </Box>
                </RadioGroup>
              </Box>
              <Box display="flex" my={4}>
                <Box width="24%" mr={[0, 5]}>
                  <Input
                    name="cashTendered"
                    variant="outlined"
                    placeholderText="Cash Tendered"
                  />
                </Box>
                <Box mr={[0, 5]} width="24%">
                  <Input
                    className={classes.disableColor}
                    isDisabled
                    name="changeDue"
                    variant="outlined"
                    placeholderText="Change due"
                  />
                </Box>
              </Box>
              <Box display="flex">
                <Box
                  width="50%"
                  bgcolor={theme.palette.background.secondary}
                  border={1}
                  borderColor="#B3B3B4"
                  borderRadius="5px"
                  py={8}
                  px={5}
                  mr={[0, 2]}
                >
                  <Box my={4}>
                    <FormControlLabel
                      value={checkBoxValue}
                      control={
                        <Checkbox onChange={handleChange} name="remitter" />
                      }
                      label="Auto Populate Remitter"
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between" my={4}>
                    <Box width="50%" mr={[0, 5]}>
                      <Input
                        name="UserName"
                        variant="outlined"
                        placeholderText="Remitter's Name"
                      />
                    </Box>
                    <Box width="50%" ml={[0, 5]}>
                      <Input
                        name="UserName"
                        variant="outlined"
                        placeholderText="Contact #"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Input
                      name="physicalAddress"
                      placeholderText="Physical Address"
                      multiline
                      rows={4}
                      variant="outlined"
                      fullWidth
                    />
                  </Box>
                </Box>
                <Box
                  width="50%"
                  bgcolor={theme.palette.background.secondary}
                  ml={[0, 2]}
                >
                  <Input
                    name="physicalAddress"
                    placeholder="Physical Address"
                    multiline
                    rows={15}
                    fullWidth
                    variant="outlined"
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Box my={4} display="flex">
                  <Box mr={[0, 4]}>
                    <Button value="Accept" />
                  </Box>
                  <Box>
                    <Button value="Clear" />
                  </Box>
                </Box>
                <Box alignSelf="center" display="flex">
                  <Box>
                    <BodyTextLarge>Amount To be Collected:</BodyTextLarge>
                  </Box>
                  <Box ml={2}>
                    <H3>$750</H3>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}

export default TaxRecordDetailUnpaid;
