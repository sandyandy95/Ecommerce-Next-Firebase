import { useContext } from 'react';
import { useSnackbar } from 'notistack';
import CartContext from '#src/context/cart/context';

const useCart = () => {
  const { state, addItemToCart, removeItemToCart, clearCart } = useContext(CartContext);
  const { products = [] } = state;
  const { enqueueSnackbar } = useSnackbar();

  const addProduct = (item) => {
    addItemToCart({ products: [...products, item] });
    enqueueSnackbar(`Agregado ${item.name}`, { variant: 'success' });
  };
  const removeProduct = (id) => {
    removeItemToCart({
      products: products.filter((item) => item.id !== id),
    });
    enqueueSnackbar('Item removido', { variant: 'info' });
  };
  const removeAllItems = () => {
    clearCart();
    enqueueSnackbar('Carrito eliminado 😭', { variant: 'error' });
  };
  const subtotal = products.reduce((acum, curr) => acum + curr.price, 0);
  const sellers = products.reduce((acum, curr) => [...acum, curr.seller], []);
  return { products, addProduct, removeProduct, subtotal, sellers, clearCart: removeAllItems };
};

export default useCart;
