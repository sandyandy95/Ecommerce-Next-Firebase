import { useState } from 'react';

const useFetch = () => {
  const [loading, setLoading] = useState();
  const fetchFunction = async ({ callback }) => {
    try {
      setLoading(false);
      if (typeof callback === 'function') {
        const data = await callback();
        setLoading(true);
        return data;
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  return { fetchFunction };
};
export default useFetch;
