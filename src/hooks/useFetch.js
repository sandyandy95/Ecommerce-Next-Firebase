import { useState } from 'react';

const useFetch = () => {
  const [loading, setLoading] = useState();

  const fetchFunction = async ({ callback }) => {
    try {
      setLoading(true);
      if (typeof callback === 'function') {
        const data = await callback();
        setLoading(false);
        return data;
      }
      throw new Error('Agregar una funcion');
    } catch (e) {
      setLoading(false);
      console.log(e);
      return '';
    }
  };

  return { fetchFunction };
};
export default useFetch;
