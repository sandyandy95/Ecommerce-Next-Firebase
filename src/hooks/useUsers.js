import { useSnackbar } from 'notistack';
import { useContext, useState } from 'react';
import { putData } from '#src/utils/fetcher';
import UIContext from '#src/context/ui/context';

const useUser = (initialState = []) => {
  const BASE_URL = '/api/users';
  const [users, setUsers] = useState(initialState);
  const { showLoading, hideLoading } = useContext(UIContext);
  const { enqueueSnackbar } = useSnackbar();
  const showSnackbarError = (message = 'Ocurrio un error') => enqueueSnackbar(message, { variant: 'error' });
  const showSnackbarSuccess = () => enqueueSnackbar('Listo', { variant: 'success' });

  const updateUser = async ({ uid, ...rest }) => {
    showLoading();

    const { error } = await putData(`${BASE_URL}/${uid}`, {
      ...rest,
    });
    if (error) {
      hideLoading();
      return showSnackbarError();
    }
    const updatedUsers = [...users];
    const index = updatedUsers.findIndex((item) => item.uid === uid);
    updatedUsers[index] = { uid, ...rest };
    setUsers(updatedUsers);
    hideLoading();
    return showSnackbarSuccess();
  };
  return { users, updateUser };
};

export default useUser;
