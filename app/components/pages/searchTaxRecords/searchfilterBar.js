import { Box } from '@material-ui/core';
import React from 'react';
import { Form, Formik } from 'formik';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { Select, Input } from '../../index';
import { BodyTextSmall } from '../../typography';
import Button from '../../muiButton';

function SearchfilterBar({
  yearList,
  initialValues,
  onHandleSubmit,
  taxPayerNameList,
  statusList,
  parcelTypeList,
}) {
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          onHandleSubmit(values);
        }}
      >
        {({ values }) => (
          <Form>
            <Box
              display="flex"
              mt={12}
              flexDirection={['column', 'row']}
              mr={[0, 5, 0]}
            >
              <Box flex={0.2} mr={[0, 4]} mt={[4, 0]}>
                <Select
                  name="year"
                  selectedValue={values.year}
                  options={yearList}
                />
              </Box>
              <Box flex={0.2} mr={[0, 4]} mt={[4, 0]}>
                <Select
                  name="taxPayerName"
                  selectedValue={values.taxPayerName}
                  options={taxPayerNameList}
                />
              </Box>
              <Box flex={0.2} mr={[0, 4]} mt={[4, 0]}>
                <Select
                  name="parcelType"
                  selectedValue={values.parcelType}
                  options={parcelTypeList}
                />
              </Box>
              <Box flex={0.2} mr={[0, 4]} mt={[4, 0]}>
                <Select
                  name="status"
                  selectedValue={values.status}
                  options={statusList}
                />
              </Box>
              <Box flex={0.4} mr={[0, 4]} mt={[4, 0]}>
                <Formik>
                  <Input
                    placeholderText="Search"
                    name="Search"
                    variant="outlined"
                    appendIcon
                    Icon={SearchIcon}
                  />
                </Formik>
              </Box>
              <Box display="flex" flex={0.1} justifyContent="space-between">
                <Box mt={[4, 0]}>
                  <Button value="Search" fullWidth />
                </Box>
                <Box mt={1} display="flex" alignItems="center" ml={[0, 4]}>
                  <RotateLeftIcon fontSize="large" color="primary" />
                  <BodyTextSmall>Reset</BodyTextSmall>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default SearchfilterBar;
