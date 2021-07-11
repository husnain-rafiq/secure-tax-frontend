import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Select } from 'components';

function ExportData({
  initialValues,
  dropDownYearValues,
  dropDownStatusValues,
}) {
  const [year, setYear] = React.useState('All');
  const [status, setStatus] = React.useState('All');
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
  const handlestatusChange = (event) => {
    setStatus(event.target.value);
  };

  return (
    <Grid xs={12}>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {() => (
          <Form>
            <Box
              display="flex"
              mt={5}
              justifyContent="space-between"
              width={['100%', '40%']}
              flexDirection={['column', 'row']}
            >
              <Box width={['100%', '49%']} mt={[4, 0]}>
                <Select
                  name="status"
                  selectedValue={status}
                  options={dropDownStatusValues}
                  onHandleChange={handlestatusChange}
                />
              </Box>
              <Box width={['100%', '49%']} mt={[4, 0]}>
                <Select
                  name="exportYear"
                  selectedValue={year}
                  options={dropDownYearValues}
                  onHandleChange={handleYearChange}
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
export default ExportData;
