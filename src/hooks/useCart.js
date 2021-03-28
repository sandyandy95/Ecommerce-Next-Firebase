import { useState } from 'react';

const useCart = () => {
  const [cartState, setcartState] = useState({
    subtotal: 12,
    products: [
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
    ],
  });
  const addProduct = (id) => alert(`addProduct ${id}`);
  const removeProduct = (id) => alert(`removeProduct ${id}`);
  const subtotal = cartState.products.reduce(
    (acum, curr) => acum + curr.price,
    0
  );
  const sellers = cartState.products.reduce(
    (acum, curr) => [...acum, curr.seller],
    []
  );
  return { cartState, addProduct, removeProduct, subtotal, sellers };
};

export default useCart;
