/**
 *
 * SearchTaxRecord
 *
 */

import React, { memo } from 'react';

import { Helmet } from 'react-helmet';
import SearchTaxRecordPage from '../../components/pages/searchTaxRecords';

function SearchTaxRecord() {
  const statusList = [
    'All',
    'Paid',
    'UnPaid',
    'Sold',
    'Redeemed',
    'Adjudicated',
  ];
  const taxPayerNameList = [
    'Tax Notice #',
    'Tax Payer Name',
    'Tax Payer A­ddress',
    'Parcel Number',
    'Check #',
    'Remitter Name',
    'Receipt#',
  ];
  const yearList = ['All', '2020', '2019', '2018', '2017', '2016'];
  const parcelTypeList = [
    'Parcel Type',
    'Tax Sale',
    'Adjudicated/Active',
    'Real Estate',
  ];
  const handleSubmit = (values) => values;
  const initialValues = {
    year: 2020,
    taxPayerName: 'Tax Payer Name',
    status: 'All',
    parcelType: 'Parcel Type',
  };
  return (
    <>
      <Helmet>
        <title>SearchTaxRecord</title>
        <meta name="description" content="Description of SearchTaxRecord" />
      </Helmet>
      <SearchTaxRecordPage
        onHandleSubmit={handleSubmit}
        initialValues={initialValues}
        statusList={statusList}
        taxPayerNameList={taxPayerNameList}
        yearList={yearList}
        parcelTypeList={parcelTypeList}
      />
    </>
  );
}

export default memo(SearchTaxRecord);
