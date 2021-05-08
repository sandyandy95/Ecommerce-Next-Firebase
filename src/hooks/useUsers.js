import { useState } from 'react';
import { putData } from '#src/utils/fetcher';

const useUser = (initialState = []) => {
  const BASE_URL = '/api/users';
  const [users, setUsers] = useState(initialState);

  const showSnackbarError = (message = 'Ocurrio un error') => alert(message);

  const showSnackbarSuccess = () => alert('Listo');

  const updateUser = async ({ uid, ...rest }) => {
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
