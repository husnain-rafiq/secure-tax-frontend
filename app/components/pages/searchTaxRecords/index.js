import { Box, Grid } from '@material-ui/core';
import React from 'react';
import PageHeading from '../../pageHeading';
import { Button, DataTable } from '../../index';
import { rows } from './rows';
import { columns } from './columns';
import { BodyTextLarge } from '../../typography';
import SearchfilterBar from './searchfilterBar';

function SearchTaxRecord({
  yearList,
  initialValues,
  onHandleSubmit,
  taxPayerNameList,
  statusList,
  parcelTypeList,
}) {
  return (
    <Grid xs={12}>
      <Box display="flex" justifyContent="space-between">
        <PageHeading heading="Tax Records & Payments" />
        <BodyTextLarge>Current Batch : 123</BodyTextLarge>
      </Box>
      <Box>
        <SearchfilterBar
          yearList={yearList}
          initialValues={initialValues}
          onHandleSubmit={onHandleSubmit}
          taxPayerNameList={taxPayerNameList}
          statusList={statusList}
          parcelTypeList={parcelTypeList}
        />
      </Box>
      <Box mt={5}>
        <DataTable columns={columns} rows={rows} checkboxSelection />
      </Box>
      <Box mt={[0, -10]} display="flex" justifyContent="flex-end">
        <Button value="Multi-Parcel Payment" />
      </Box>
    </Grid>
  );
}

export default SearchTaxRecord;
