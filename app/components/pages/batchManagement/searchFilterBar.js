import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';
import { Form, Formik } from 'formik';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import { ROLES, BATCH_STATUS, PAYMENT_STATUS } from 'utils/constants';
import { useAuthContext } from 'context/authContext';
import { BodyTextSmall } from '../../typography';
import { Select } from '../../index';
import Button from '../../muiButton';
import MuiDatePicker from '../../muiDatePicker';
import DialogBox from './addNewBatchDialog';

function SearchfilterBar({
  userNameList,
  onHandleSubmit,
  onClear,
  onActionButtonClick,
  setClickedButtonName,
  selectedRow,
  clickedButtonName,
  isSuccess,
  setBatchActionSuccess,
  batchStatus,
  isMyBatchOpen,
}) {
  const { user } = useAuthContext();
  const userRole = user?.data?.roleLabel;

  const [addNewBatch, setAddNewBatch] = React.useState(false);
  const [closeBatch, setCloseBatch] = React.useState(false);
  const [reopenBatch, setReopenBatch] = React.useState(false);
  const [changeBatchDate, setChangeBatchDate] = React.useState(false);

  const addNewBatchDialogue = () => {
    setClickedButtonName('Add Batch');
    setAddNewBatch(!addNewBatch);
  };
  const closeBatchDialogue = () => {
    setClickedButtonName('Close Batch');
    setCloseBatch(!closeBatch);
  };
  const reopenBatchDialogue = () => {
    setClickedButtonName('Reopen Batch');
    setReopenBatch(!reopenBatch);
  };
  const changeBatchDateDialogue = () => {
    setClickedButtonName('Change Batch');
    setChangeBatchDate(!changeBatchDate);
  };

  const clearFilteringSearch = (resetForm) => {
    resetForm();
    onClear();
  };

  const closeBatchDialog = () => {
    if (isSuccess) {
      if (clickedButtonName === 'Reopen Batch') {
        setReopenBatch(!reopenBatch);
      } else if (clickedButtonName === 'Close Batch') {
        setCloseBatch(!closeBatch);
      } else if (clickedButtonName === 'Change Batch') {
        setChangeBatchDate(!changeBatchDate);
      } else if (clickedButtonName === 'Add Batch') {
        setAddNewBatch(!addNewBatch);
      }
      setBatchActionSuccess(false);
    }
  };
  useEffect(() => {
    closeBatchDialog();
  }, [isSuccess]);

  return (
    <Box>
      <Formik
        initialValues={{
          status: 1,
          userId: '',
        }}
        onSubmit={(values) => {
          const searchParam = {
            ...values,
            openingDate: moment(values.openingDate).format('YYYY-MM-DD'),
          };
          onHandleSubmit(searchParam);
        }}
      >
        {({ values, resetForm }) => (
          <Form>
            <Box
              display="flex"
              mt={12}
              flexDirection={['column', 'row']}
              mr={[0, 5, 0]}
              width={['100%', '100%', '90%', '70%']}
            >
              <Box width="20%" mr={[0, 4]}>
                <MuiDatePicker name="openingDate" />
              </Box>
              {userRole !== ROLES.COLLECTINGAGENT && (
                <Box width="30%" mr={[0, 4]}>
                  <Select
                    name="userId"
                    selectedValue={values.userId}
                    options={userNameList}
                    placeholder="User"
                  />
                </Box>
              )}
              <Box width="20%" mr={[0, 4]}>
                <Select
                  name="status"
                  selectedValue={values.status}
                  options={BATCH_STATUS}
                />
              </Box>
              <Box>
                <Button type="submit" value="Search" />
              </Box>
              <Box ml={2}>
                <IconButton
                  onClick={() => clearFilteringSearch(resetForm)}
                  color="inherit"
                  size="medium"
                >
                  <RotateLeftIcon color="primary" />
                  <BodyTextSmall>Reset</BodyTextSmall>
                </IconButton>
              </Box>
            </Box>
            <Box display="flex" my={6}>
              {/* {!selectedRow.length && !isMyBatchOpen && ( */}
              <Box mr={[0, 4]}>
                <Button
                  value="Add New Batch"
                  startIcon={<AddIcon />}
                  onClick={addNewBatchDialogue}
                  disabled={selectedRow.length || isMyBatchOpen}
                />
              </Box>
              {/* )} */}
              {batchStatus !== PAYMENT_STATUS.CLOSED && (
                <Box mr={[0, 4]}>
                  <Button
                    disabled={selectedRow.length === 0}
                    value="Close Batch"
                    onClick={closeBatchDialogue}
                  />
                </Box>
              )}
              {userRole !== ROLES.COLLECTINGAGENT &&
                batchStatus !== PAYMENT_STATUS.OPEN && (
                  <Box mr={[0, 4]}>
                    <Button
                      disabled={selectedRow.length === 0}
                      value="Re-Open Batch"
                      onClick={reopenBatchDialogue}
                    />
                  </Box>
                )}
              <Box>
                <Button
                  disabled={selectedRow.length === 0}
                  value="Change Date"
                  onClick={changeBatchDateDialogue}
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
      <DialogBox
        dialogState={addNewBatch}
        handleChangeDialogState={addNewBatchDialogue}
        title="Add New Batch"
        onActionButtonClick={onActionButtonClick}
        name="opening_date"
        buttonType="Add Batch"
      />
      <DialogBox
        dialogState={closeBatch}
        handleChangeDialogState={closeBatchDialogue}
        title="Close Batch"
        name="closing_date"
        onActionButtonClick={onActionButtonClick}
        buttonType="Close Batch"
      />
      <DialogBox
        dialogState={reopenBatch}
        handleChangeDialogState={reopenBatchDialogue}
        title="Re Open Batch"
        name="closing_date"
        onActionButtonClick={onActionButtonClick}
        buttonType="Reopen Batch"
      />
      <DialogBox
        dialogState={changeBatchDate}
        handleChangeDialogState={changeBatchDateDialogue}
        title="Change Batch Date"
        name="openingDate"
        onActionButtonClick={onActionButtonClick}
        buttonType="Change Batch"
      />
    </Box>
  );
}

export default SearchfilterBar;
