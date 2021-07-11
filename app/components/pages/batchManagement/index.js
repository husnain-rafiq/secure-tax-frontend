import { Box, Grid } from '@material-ui/core';
import React from 'react';
import PageHeading from '../../pageHeading';
import { DataTable } from '../../index';
import SearchfilterBar from './searchFilterBar';
import { columns } from './columns';
import Loading from '../../loading';

function BatchManagement({
  onHandleSubmit,
  userNameList,
  statusList,
  data,
  onClear,
  onActionButtonClick,
  selectedRow,
  setSelectedRow,
  setClickedButtonName,
  rowCount,
  rowsPerPage,
  handleServerPageNumber,
  pageNumber,
  handleServerPageSize,
  isBatchLoading,
  clickedButtonName,
  isSuccess,
  setBatchActionSuccess,
  batchStatus,
  isMyBatchOpen,
}) {
  return (
    <Grid xs={12}>
      <Box>
        <PageHeading heading="Batch Management" />
      </Box>
      <Box>
        <SearchfilterBar
          onHandleSubmit={onHandleSubmit}
          userNameList={userNameList}
          statusList={statusList}
          onClear={onClear}
          onActionButtonClick={onActionButtonClick}
          setClickedButtonName={setClickedButtonName}
          selectedRow={selectedRow}
          clickedButtonName={clickedButtonName}
          isSuccess={isSuccess}
          setBatchActionSuccess={setBatchActionSuccess}
          batchStatus={batchStatus}
          isMyBatchOpen={isMyBatchOpen}
        />
      </Box>
      <Box mt={5}>
        {isBatchLoading && <Loading />}

        <DataTable
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
          columns={columns}
          rows={data}
          checkboxSelection
          rowCount={rowCount}
          tableRowsPerPage={rowsPerPage}
          handleServerPageNumber={handleServerPageNumber}
          pageNumber={pageNumber}
          handleServerPageSize={handleServerPageSize}
        />
      </Box>
    </Grid>
  );
}

export default BatchManagement;
