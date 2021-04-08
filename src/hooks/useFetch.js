import { useSnackbar } from 'notistack';
import { useContext } from 'react';
import UIContext from '#src/context/ui/context';

const useFetch = () => {
  const { showLoading, hideLoading } = useContext(UIContext);

  const { enqueueSnackbar } = useSnackbar();
  const fetchFunction = async ({ callback, enableSnackbar = false, snackbar = { msjSuccess: 'Listo', msjError: 'Error' } }) => {
    try {
      showLoading();
      let data;
      if (typeof callback === 'function') {
        data = await callback();
      }

      if (enableSnackbar) {
        enqueueSnackbar(snackbar.msjSuccess, {
          variant: 'success',
        });
      }
      hideLoading();
      return data;
    } catch (e) {
      hideLoading();
      enqueueSnackbar(snackbar.msjError, {
        variant: 'error',
      });
      return '';
    }
  };
  return { fetchFunction };
};
export default useFetch;
