import { useContext } from 'react';
import CartContext from '#src/contexts/cart/context';

const useCart = () => {
  const { state, addItemToCart, removeItemToCart, clearCart } = useContext(
    CartContext
  );
  const { products = [] } = state;

  const addProduct = (newProduct) => addItemToCart(newProduct);
  const removeProduct = (idProduct) => removeItemToCart(idProduct);

  const subtotal = products.reduce(
    (acum, productItem) => acum + productItem.price,
    0
  );
  const sellers = products.reduce(
    (acum, productItem) => [...acum, productItem.seller],
    []
  );

  return { products, addProduct, removeProduct, subtotal, sellers, clearCart };
};

export default useCart;
