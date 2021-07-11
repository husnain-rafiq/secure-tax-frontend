import React, { useEffect } from 'react';
import { Box, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MuiDialog from '../../muiDialog';
import EditUser from './editUser';
import { Modal } from '../../../utils/helper';
import { useEditUser, useDeleteUser } from '../../../hooks/users';

const Actions = ({ data }) => {
  const [open, setOpen] = React.useState(false);
  const user = data.row;
  const { id } = data;
  const openEditUserDialogue = () => {
    setOpen(!open);
  };
  const editUser = useEditUser();
  const deleteUser = useDeleteUser();

  const { isLoading, isSuccess } = editUser;
  const handleDeleteUser = () => {
    Modal.fire().then((result) => {
      if (result.isConfirmed) {
        deleteUser.mutate(id);
      }
    });
  };
  const onHandleSubmit = (updatedData, userId) => {
    const payload = { userId, updatedData };
    editUser.mutate(payload);
  };
  useEffect(() => {
    if (isSuccess) {
      openEditUserDialogue();
    }
  }, [isSuccess]);

  return (
    <>
      <MuiDialog
        title="Edit User"
        open={open}
        onClose={openEditUserDialogue}
        maxWidth="md"
      >
        <EditUser
          initialValues={user}
          openEditUserDialogue={openEditUserDialogue}
          onHandleSubmit={onHandleSubmit}
          isLoading={isLoading}
        />
      </MuiDialog>
      <Box display="flex">
        <IconButton
          key="edit"
          aria-label="edit"
          color="primary"
          onClick={openEditUserDialogue}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          key="delete"
          aria-label="delete"
          color="primary"
          onClick={handleDeleteUser}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </>
  );
};
export default Actions;
