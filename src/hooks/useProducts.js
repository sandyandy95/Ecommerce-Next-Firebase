import { useEffect, useState } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);

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
      {
        id: '3',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Quia fugiat consectetur dolor nemo hic deleniti.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Tracy Franecki',
        },
      },
      {
        id: '4',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Dolor earum aut corrupti voluptatem nesciunt.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Meghan Carroll',
        },
      },
      {
        id: '5',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description:
          'Excepturi ut ratione magnam fugiat modi sunt itaque dolorum id.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Amy Thiel',
        },
      },
      {
        id: '6',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Nam corrupti nostrum.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Laurence Jones',
        },
      },
      {
        id: '7',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Culpa in neque sapiente dolorum nobis unde.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Angelina Feeney',
        },
      },
      {
        id: '8',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description:
          'Aut nesciunt dolore ad ratione consequatur enim itaque sit quibusdam.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Charles Armstrong',
        },
      },
      {
        id: '9',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Dicta distinctio at et.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Edmund Deckow MD',
        },
      },
      {
        id: '10',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Excepturi minus blanditiis.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Pat Rau',
        },
      },
    ];
  };
  useEffect(() => {
    const getProducts = () => {
      const _products = getProductsFromDB();
      setProducts(_products);
    };
    getProducts();
  }, []);
  return { products };
};
export default useProducts;
