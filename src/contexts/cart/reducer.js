import { clearLocalStorage, setLocalStorage } from '#src/utils/localStorage';
import { cart } from '../types';

const saveInLocalStorage = (state) => setLocalStorage('cart', state);

const reducer = (state, action) => {
  const { payload = {}, type } = action;
  const { products = [] } = state;
  const { newProduct, idProduct } = payload;
  let updatedProducts = [];
  switch (type) {
    case cart.ADD_PRODUCT:
      // payload -->  newProduct
      updatedProducts = [...products, newProduct];
      saveInLocalStorage(updatedProducts);
      return {
        ...state,
        products: updatedProducts,
      };
    case cart.REMOVE_PRODUCT:
      // payload -->  idProduct
      updatedProducts = products.filter((item) => item.id !== idProduct);
      saveInLocalStorage(updatedProducts);
      return {
        ...state,
        products: updatedProducts,
      };
    case cart.CLEAR_CART:
      clearLocalStorage('cart');
      return {
        products: [],
      };
    default:
      return state;
  }
};
export default reducer;
