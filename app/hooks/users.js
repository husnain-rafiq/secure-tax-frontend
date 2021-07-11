import { useMutation, useQueryClient } from 'react-query';
import { updateUser, deleteUser } from '../state/queryFunctions';
import { keys } from '../state/queryKeys';
import { Toast, Modal } from '../utils/helper';

export function useEditUser() {
  const queryClient = useQueryClient();
  return useMutation(updateUser, {
    onSuccess: () => {
      Toast({
        icon: 'success',
        title: `User Updated Successfully`,
      });
      queryClient.invalidateQueries(keys.getUsers({}));
    },
    onError: (response) => {
      const errorResponseList = Object.values(response);
      Toast({
        icon: 'error',
        title: errorResponseList[0] || 'Error while Updating',
      });
    },
  });
}

export function useDeleteUser() {
  const queryClient = useQueryClient();
  return useMutation(deleteUser, {
    onSuccess: () => {
      Modal.fire({
        title: 'Delete',
        text: 'User Deleted',
        icon: 'success',
        confirmButtonText: 'Ok',
        showCancelButton: false,
      });
      queryClient.invalidateQueries(keys.getUsers({}));
    },
    onError: (response) => {
      const errorResponseList = Object.values(response);
      Toast({
        icon: 'error',
        title: errorResponseList[0] || 'Error while Deleting',
      });
    },
  });
}
