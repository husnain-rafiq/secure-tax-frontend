import React, { memo } from 'react';
import { Box, Grid } from '@material-ui/core';
import PageHeading from '../../pageHeading';
import ImportExportButton from '../../importExportButton';
import { Tab } from '../../index';
import ExportData from './exportData';
import ImportData from './importData';

function ImportExportData({
  dropDownYearValues,
  dropDownStatusValues,
  initialValues,
}) {
  const inputEl = React.useRef(null);
  const [selectedTabValue, setSelectedTabValue] = React.useState(0);
  const ImportExportTabOptions = [
    'Import Annual Data',
    'Import Change Orders',
    'Import Address Changes',
    'Export Data',
  ];
  const handleChangeTab = (entry, newValue) => {
    setSelectedTabValue(newValue);
  };
  const handleClick = () => {
    inputEl.current.click();
  };
  return (
    <>
      <Grid xs={12}>
        <Box>
          <PageHeading heading="Import / Export Data" />
        </Box>
        <Box>
          <Tab
            handleChange={handleChangeTab}
            value={selectedTabValue}
            tabOptions={ImportExportTabOptions}
          />
        </Box>
        {selectedTabValue === 3 ? (
          <ExportData
            dropDownStatusValues={dropDownStatusValues}
            dropDownYearValues={dropDownYearValues}
            initialValues={initialValues}
          />
        ) : (
          <ImportData
            dropDownYearValues={dropDownYearValues}
            initialValues={initialValues}
            handleClick={handleClick}
            inputEl={inputEl}
          />
        )}
        <Box mt={5}>
          <ImportExportButton value={selectedTabValue} />
        </Box>
      </Grid>
    </>
  );
}
export default memo(ImportExportData);
