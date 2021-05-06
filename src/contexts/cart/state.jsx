import { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartReducer from './reducer';
import CartContext from './context';
import { cart as cartTypes } from '../types';
import { getLocalStorage } from '#src/utils/localStorage';

const CartState = ({ children }) => {
  const initialState = getLocalStorage('cart', { products: [] });

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addItemToCart = (newProduct) => {
    dispatch({
      type: cartTypes.ADD_PRODUCT,
      payload: { newProduct },
    });
  };

  const removeItemToCart = (idProduct) => {
    dispatch({
      type: cartTypes.REMOVE_PRODUCT,
      payload: { idProduct },
    });
  };
  const clearCart = () => {
    dispatch({
      type: cartTypes.CLEAR_CART,
    });
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
