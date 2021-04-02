import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartReducer from './reducer';
import CartContext from './context';
import { cart as cartTypes } from '../types';
import { getLocalStorage, setLocalStorage, clearLocalStorage } from '#src/utils/localstorage';

const CartState = ({ children }) => {
  const initialState = getLocalStorage('cart', { products: [] });

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItemToCart = (payload) => {
    dispatch({
      type: cartTypes.ADD_PRODUCT,
      payload,
    });
    setLocalStorage('cart', payload);
  };

  const removeItemToCart = (payload) => {
    dispatch({
      type: cartTypes.REMOVE_PRODUCT,
      payload,
    });
    setLocalStorage('cart', payload);
  };
  const clearCart = () => {
    dispatch({
      type: cartTypes.CLEAR_CART,
    });
    clearLocalStorage('cart');
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addItemToCart,
        removeItemToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
CartState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartState;
