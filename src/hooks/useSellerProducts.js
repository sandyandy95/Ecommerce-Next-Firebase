import { useEffect, useState } from 'react';

const useSellerProducts = ({ uid }) => {
  const [seller, setSeller] = useState({});

  const getSellerFromFB = (_uid) => {
    const _seller = {
      displayName: 'Rosie Dare',
      uid: _uid,
      photoURL: 'http://fakeimg.pl/312x321?font=lobster',
    };
    return _seller;
  };

  useEffect(() => {
    const getSeller = () => {
      const _seller = getSellerFromFB(uid);
      setSeller(_seller);
    };
    getSeller();
  }, []);

  return { seller };
};
export default useSellerProducts;
