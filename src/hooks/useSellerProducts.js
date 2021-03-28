import { useEffect, useState } from 'react';

const useSellerProducts = ({ uid }) => {
  const [products, setProducts] = useState([]);
  const [seller, setSeller] = useState({});

  const getProductsFromDB = () => {
    const msj = 'Call to api';
    console.log(msj);
    return [
      {
        id: '0',
        name: 'Parrillada familiar',
        price: 12.32,
        description: 'Nostrum autem sunt dolore rerum ipsam optio.',
        photoURL:
          'https://d1ralsognjng37.cloudfront.net/7f2313ad-88dd-4a72-8fa9-8bc11b68ae9f.jpeg',
        seller: {
          name: 'Rosie Dare',
        },
      },
      {
        id: '1',
        name: 'Parrillada unica',
        price: 12.32,
        description: 'Et atque molestiae aut qui.',
        photoURL:
          'https://d1ralsognjng37.cloudfront.net/2e97c559-d676-4691-ace7-f150932a935a.jpeg',
        seller: {
          name: 'Julia Blanda',
        },
      },
      {
        id: '2',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'At eligendi vero.',
        photoURL:
          'https://d1ralsognjng37.cloudfront.net/3c266a5d-9a20-488d-8f9a-173c13d07397.jpeg',
        seller: {
          name: 'Lynn Hahn',
        },
      },
    ];
  };
  const getSellerFromFB = (_uid) => {
    const _seller = {
      name: 'Rosie Dare',
      uid: _uid,
      photoURL: 'http://fakeimg.pl/312x321?font=lobster',
    };
    return _seller;
  };
  useEffect(() => {
    const getProducts = () => {
      const _products = getProductsFromDB();
      setProducts(_products);
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getSeller = () => {
      const _seller = getSellerFromFB(uid);
      setSeller(_seller);
    };
    getSeller();
  }, []);

  return { products, seller };
};
export default useSellerProducts;
