import { useSnackbar } from 'notistack';
import { useState } from 'react';

const useFetch = () => {
  const [loading, setLoading] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const fetchFunction = async ({ callback, enableSnackbar = false, snackbar = { msjSuccess: 'Listo', msjError: 'Error' } }) => {
    try {
      setLoading(false);
      let data;
      if (typeof callback === 'function') {
        data = await callback();
      }
      setLoading(true);
      if (enableSnackbar) {
        enqueueSnackbar(snackbar.msjSuccess, {
          variant: 'success',
        });
      }
      return data;
    } catch (e) {
      setLoading(false);
      enqueueSnackbar(snackbar.msjError, {
        variant: 'error',
      });
    }
  };
  return { fetchFunction };
};
export default useFetch;
