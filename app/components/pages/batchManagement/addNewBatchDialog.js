import React from 'react';
import MuiDialog from '../../muiDialog';
import BatchDialog from './batchDialogContent';

const addNewBatchDialog = ({
  dialogState,
  handleChangeDialogState,
  title,
  name,
  onActionButtonClick,
  buttonType,
}) => (
  <>
    <MuiDialog
      title={title}
      open={dialogState}
      maxWidth="xs"
      onClose={handleChangeDialogState}
    >
      <BatchDialog
        handleChangeDialogState={handleChangeDialogState}
        name={name}
        onActionButtonClick={onActionButtonClick}
        buttonType={buttonType}
      />
    </MuiDialog>
  </>
);
export default addNewBatchDialog;
