import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { putData } from '#src/utils/fetcher';

const useUser = (initialState = []) => {
  const BASE_URL = '/api/users';
  const [users, setUsers] = useState(initialState);
  const { enqueueSnackbar } = useSnackbar();
  const showSnackbarError = (message = 'Ocurrio un error') => enqueueSnackbar(message, { variant: 'error' });
  const showSnackbarSuccess = () => enqueueSnackbar('Listo', { variant: 'success' });
  const showSnackbarInfo = () => enqueueSnackbar('Ejecutando acción', { variant: 'info' });

  const updateUser = async ({ uid, ...rest }) => {
    showSnackbarInfo();
    const { error } = await putData(`${BASE_URL}/${uid}`, {
      ...rest,
    });
    if (error) {
      return showSnackbarError();
    }
    const updatedUsers = [...users];
    const index = updatedUsers.findIndex((item) => item.uid === uid);
    updatedUsers[index] = { uid, ...rest };
    setUsers(updatedUsers);
    return showSnackbarSuccess();
  };
  return { users, updateUser };
};

export default useUser;
