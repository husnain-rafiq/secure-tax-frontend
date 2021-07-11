/**
 *
 * TaxRecordDetailUnpaid
 *
 */

import React, { memo } from 'react';

import { Helmet } from 'react-helmet';
import TaxRecordDetailUnpaidPage from '../../components/pages/taxRecordDetailUnpaid';

function TaxRecordDetailUnpaid() {
  return (
    <>
      <Helmet>
        <title>TaxRecordDetailUnpaid</title>
        <meta
          name="description"
          content="Description of TaxRecordDetailUnpaid"
        />
      </Helmet>
      <TaxRecordDetailUnpaidPage />
    </>
  );
}

export default memo(TaxRecordDetailUnpaid);
