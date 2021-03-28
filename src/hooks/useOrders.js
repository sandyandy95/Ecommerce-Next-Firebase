import { useEffect, useState } from 'react';
import useUser from './useUser';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useUser();

  const getOrdersFromDB = () => {
    const data = [
      {
        id: '34449',
        customer: {
          displayName: 'Cristian Ronda',
          uid: '44717de7-1053-46b2-bcfe-b6315b615cba',
          photoURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg',
        }, // save only uid
        products: [
          {
            id: '2',
            name: 'Hamburguesa Queen',
            price: 10,
            description: 'At eligendi vero.',
            photoURL:
              'https://d1ralsognjng37.cloudfront.net/3c266a5d-9a20-488d-8f9a-173c13d07397.jpeg',
            seller: {
              uid: 's1',
              name: 'Lynn Hahn',
            },
          },
          {
            id: '3',
            name: 'Hamburguesa Queen',
            price: 12,
            description: 'Quia fugiat consectetur dolor nemo hic deleniti.',
            photoURL: 'http://placeimg.com/640/480/food',
            seller: {
              uid: 's2',
              name: 'Tracy Franecki',
            },
          },
        ],
        total: 22 * 1.12,
        subtotal: 22,
        createdAt: new Date().getTime(),
      },
      {
        id: '74262',
        customer: {
          displayName: 'Amalia Torres',
          uid: '44717de',
          photoURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg',
        }, // save only uid
        products: [
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
        total: 12.32 * 1.12,
        subtotal: 12.32,
        createdAt: new Date().getTime(),
      },
      {
        id: '92632',
        customer: {
          displayName: 'Karla Anela',
          uid: '2222',
          photoURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg',
        }, // save only uid
        products: [
          {
            id: '6',
            name: 'Hamburguesa Queen',
            price: 5,
            description: 'Nam corrupti nostrum.',
            photoURL: 'http://placeimg.com/640/480/food',
            seller: {
              name: 'Laurence Jones',
            },
          },
          {
            id: '7',
            name: 'Hamburguesa Queen',
            price: 6,
            description: 'Culpa in neque sapiente dolorum nobis unde.',
            photoURL: 'http://placeimg.com/640/480/food',
            seller: {
              name: 'Angelina Feeney',
            },
          },
          {
            id: '8',
            name: 'Hamburguesa Queen',
            price: 7,
            description:
              'Aut nesciunt dolore ad ratione consequatur enim itaque sit quibusdam.',
            photoURL: 'http://placeimg.com/640/480/food',
            seller: {
              name: 'Charles Armstrong',
            },
          },
        ],
        total: 18 * 1.12,
        subtotal: 18,
        createdAt: new Date().getTime(),
      },
    ];
    return data;
  };

  const getOrdersById = () => {
    // get orders by user id
    const data = [
      {
        id: '57974',
        customer: {
          displayName: 'Cristian Ronda',
          uid: '44717de7-1053-46b2-bcfe-b6315b615cba',
          photoURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg',
        }, // save only uid
        products: [
          {
            id: '2',
            name: 'Hamburguesa Queen',
            price: 10,
            description: 'At eligendi vero.',
            photoURL:
              'https://d1ralsognjng37.cloudfront.net/3c266a5d-9a20-488d-8f9a-173c13d07397.jpeg',
            seller: {
              uid: 's1',
              name: 'Lynn Hahn',
            },
          },
          {
            id: '3',
            name: 'Hamburguesa Queen',
            price: 12,
            description: 'Quia fugiat consectetur dolor nemo hic deleniti.',
            photoURL: 'http://placeimg.com/640/480/food',
            seller: {
              uid: 's2',
              name: 'Tracy Franecki',
            },
          },
        ],
        total: 22 * 1.12,
        subtotal: 22,
        createdAt: new Date().getTime(),
      },
      {
        id: '78726',
        customer: {
          displayName: 'Cristian Ronda',
          uid: '44717de7-1053-46b2-bcfe-b6315b615cba',
          photoURL:
            'https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg',
        }, // save only uid
        products: [
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
        total: 12.32 * 1.12,
        subtotal: 12.32,
        createdAt: new Date().getTime(),
      },
    ];
    return data;
  };

  useEffect(() => {
    const getOrders = () => {
      const isAdmin = user.role === 'admin';
      const data = isAdmin ? getOrdersFromDB() : getOrdersById(user.id);
      setOrders(data);
    };
    getOrders();
  }, [user.id, user.role]);
  return { orders };
};

export default useOrders;
