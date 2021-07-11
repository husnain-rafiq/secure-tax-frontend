import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import ImportExportData from '../../components/pages/importExport/loadable';

function ImportExportContainer() {
  const dropDownYearValues = ['All', '2020', '2019', '2018', '2017'];
  const dropDownStatusValues = [
    'All',
    'Paid',
    'Unpaid',
    'Refund',
    'Delinquent',
    'Sold',
    'Adjudicated',
    'Redeemed',
  ];
  const initialValues = {
    year: 'All',
    status: 'All',
    exportYear: 'All',
    filePath: '',
    file: '',
  };
  return (
    <>
      <Helmet>
        <title>Import / Export Data</title>
        <meta
          name="description"
          content="Description of Import / Export Data "
        />
      </Helmet>
      <ImportExportData
        dropDownYearValues={dropDownYearValues}
        dropDownStatusValues={dropDownStatusValues}
        initialValues={initialValues}
      />
    </>
  );
}

export default memo(ImportExportContainer);
