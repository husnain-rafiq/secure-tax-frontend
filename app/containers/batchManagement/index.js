/**
 *
 * BatchManagement
 *
 */

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import moment from 'moment';
import BatchManagementPage from '../../components/pages/batchManagement';
import {
  fetchPaymentBatches,
  createPaymentBatch,
  closePaymentBatch,
  reopenPaymentBatch,
  changePaymentBatch,
  fetchUsers,
} from '../../state/queryFunctions';
import { keys } from '../../state/queryKeys';
import { PAYMENT_STATUS, PAGE_SIZE, ROLES } from '../../utils/constants';
import { Toast } from '../../utils/helper';
import { useAuthContext } from '../../context/authContext';

function BatchManagement() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(PAGE_SIZE);
  const queryClient = useQueryClient();
  const [clickedButtonName, setClickedButtonName] = useState('');
  const [selectedRow, setSelectedRow] = useState([]);
  const initialValues = {
    userId: '',
    status: 1,
    openingDate: moment(new Date()).format('YYYY-MM-DD'),
  };
  const [filters, setFilters] = useState(initialValues);
  const [batchActionSuccess, setBatchActionSuccess] = useState(false);
  const { user } = useAuthContext();

  const userRole = user?.data?.roleLabel;

  const { data: userData } = useQuery(
    keys.getUsers({
      page: 1,
      pageSize: 100,
    }),
    fetchUsers,
    {
      enabled: userRole !== ROLES.COLLECTINGAGENT,
    }
  );

  let updatedUserData;
  if (userData) {
    updatedUserData = userData?.results.map((item) => ({
      ...item,
      value: item.id,
      label: item.username,
    }));
  }

  const handleFilterSearch = (values) => {
    setPage(1);
    setFilters(values);
  };

  const { data, isLoading: isBatchLoading } = useQuery(
    keys.getPaymentBatches({
      filters,
      page,
      pageSize,
    }),
    fetchPaymentBatches
  );

  const count = data?.count;

  let isMyBatchOpen = false;
  let updatedFormatData = [];
  if (data) {
    updatedFormatData = data?.results.map((item) => {
      if (
        item.status === PAYMENT_STATUS.OPEN &&
        user?.data?.id === item.openedBy &&
        !isMyBatchOpen
      ) {
        isMyBatchOpen = true;
      }
      const formatData = {
        ...item,
        opening_date: moment(item.opening_date).format('MM-DD-YYYY'),
      };
      return formatData;
    });
  }

  const onClear = () => {
    setFilters(initialValues);
    setSelectedRow([]);
  };

  const handleServerPageNumber = (value) => {
    setPage(value);
  };
  const handleServerPageSize = (value) => {
    setPageSize(value);
  };

  const errorHandler = (response) => {
    const errorResponseList = Object.values(response);
    Toast({
      icon: 'error',
      title: errorResponseList[0] || 'Error while Updating',
    });
  };

  const successStateHandler = () => {
    let successMessage;
    if (clickedButtonName === 'Reopen Batch') {
      successMessage = `Batch Reopen Successfully`;
    } else if (clickedButtonName === 'Close Batch') {
      successMessage = `Batch Closed Successfully`;
    } else if (clickedButtonName === 'Change Batch') {
      successMessage = `Batch Changed Successfully`;
    } else if (clickedButtonName === 'Add Batch') {
      successMessage = `Batch Created Successfully`;
    }
    setSelectedRow([]);
    setBatchActionSuccess(true);
    Toast({
      icon: 'success',
      title: successMessage,
    });
    queryClient.invalidateQueries(keys.getPaymentBatches);
  };

  const mutationAddOrReopenBatches = useMutation(
    clickedButtonName === 'Reopen Batch'
      ? reopenPaymentBatch
      : createPaymentBatch,
    {
      onSuccess: () => successStateHandler(),

      onError: (response) => errorHandler(response),
    }
  );

  const mutationCloseAndChangeBatches = useMutation(
    clickedButtonName === 'Close Batch'
      ? closePaymentBatch
      : changePaymentBatch,
    {
      onSuccess: () => successStateHandler(),
      onError: (response) => errorHandler(response),
    }
  );

  const onActionButtonClick = (value) => {
    if (clickedButtonName === 'Add Batch') {
      mutationAddOrReopenBatches.mutate({
        ...value,
        status: PAYMENT_STATUS.OPEN,
      });
    } else if (clickedButtonName === 'Close Batch') {
      mutationCloseAndChangeBatches.mutate({
        ...value,
        status: PAYMENT_STATUS.CLOSED,
        batchIds: selectedRow,
      });
    } else if (clickedButtonName === 'Reopen Batch') {
      mutationAddOrReopenBatches.mutate({
        batchIds: selectedRow,
        status: PAYMENT_STATUS.OPEN,
      });
    } else if (clickedButtonName === 'Change Batch') {
      mutationCloseAndChangeBatches.mutate({
        ...value,
        status: PAYMENT_STATUS.OPEN,
        batchIds: selectedRow,
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>BatchManagement</title>
        <meta name="description" content="Description of BatchManagement" />
      </Helmet>
      <BatchManagementPage
        onHandleSubmit={handleFilterSearch}
        userNameList={updatedUserData && updatedUserData}
        data={updatedFormatData}
        isBatchLoading={isBatchLoading}
        onClear={onClear}
        onActionButtonClick={onActionButtonClick}
        selectedRow={selectedRow}
        setSelectedRow={setSelectedRow}
        setClickedButtonName={setClickedButtonName}
        rowCount={count}
        rowsPerPage={pageSize}
        pageNumber={page}
        handleServerPageNumber={handleServerPageNumber}
        handleServerPageSize={handleServerPageSize}
        clickedButtonName={clickedButtonName}
        isSuccess={batchActionSuccess}
        setBatchActionSuccess={setBatchActionSuccess}
        batchStatus={filters?.status}
        isMyBatchOpen={isMyBatchOpen}
      />
    </>
  );
}

export default BatchManagement;
