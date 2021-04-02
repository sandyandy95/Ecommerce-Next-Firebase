import { useContext } from 'react';
import CartContext from '#src/context/cart/context';

const useCart = () => {
  const { state, addItemToCart, removeItemToCart, clearCart } = useContext(CartContext);
  const { products = [] } = state;

  const addProduct = (item) => addItemToCart({ products: [...products, item] });
  const removeProduct = (id) =>
    removeItemToCart({
      products: products.filter((item) => item.id !== id),
    });

  const subtotal = products.reduce((acum, curr) => acum + curr.price, 0);
  const sellers = products.reduce((acum, curr) => [...acum, curr.seller], []);
  return { products, addProduct, removeProduct, subtotal, sellers, clearCart };
};

export default useCart;
