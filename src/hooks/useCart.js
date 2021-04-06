import { useContext } from 'react';
import { useSnackbar } from 'notistack';
import CartContext from '#src/context/cart/context';
import { postData } from '#src/utils/fetcher';

const useCart = () => {
  const { state, addItemToCart, removeItemToCart, clearCart } = useContext(CartContext);
  const { products = [] } = state;
  const { enqueueSnackbar } = useSnackbar();

  const addProduct = (product) => {
    if (products.some((item) => item.id === product.id)) {
      return enqueueSnackbar(`Item ${product.name} ya agregado`, { variant: 'warning' });
    }
    if (products.length >= 3) {
      return enqueueSnackbar('Solo puedes comprar 3 productos', { variant: 'error' });
    }
    addItemToCart({ products: [...products, product] });
    return enqueueSnackbar(`Agregado ${product.name}`, { variant: 'success' });
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

  const checkoutOrder = async (data) => {
    const { error } = await postData('api/order/checkout/', data);
    if (error) {
      return enqueueSnackbar('Lo sentimos sucedio un error', { variant: 'error' });
    }
    clearCart();
    return enqueueSnackbar('¡Gracias! Tu pedido llegará pronto', { variant: 'success' });
  };
  return { products, addProduct, removeProduct, subtotal, sellers, clearCart: removeAllItems, checkoutOrder };
};

export default useCart;
