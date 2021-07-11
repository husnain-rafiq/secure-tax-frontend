/**
 *
 * TaskRecordDetail
 *
 */

import React, { memo } from 'react';

import { Helmet } from 'react-helmet';
import TaxRecordDetail from '../../components/pages/taxRecordDetail';

function TaskRecordDetail() {
  return (
    <>
      <Helmet>
        <title>TaskRecordDetail</title>
        <meta name="description" content="Description of TaskRecordDetail" />
      </Helmet>
      <TaxRecordDetail />
    </>
  );
}

export default memo(TaskRecordDetail);
