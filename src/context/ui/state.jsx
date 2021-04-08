import { useReducer } from 'react';
import PropTypes from 'prop-types';
import UIReducer from './reducer';
import UIContext from './context';
import { uiTypes } from '../types';

const CartState = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, { loading: false });

  const showLoading = () =>
    dispatch({
      type: uiTypes.SHOW_LOADING_FETCH,
    });

  const hideLoading = () =>
    dispatch({
      type: uiTypes.HIDE_LOADING_FETCH,
    });

  return (
    <UIContext.Provider
      value={{
        state,
        showLoading,
        hideLoading,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
CartState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CartState;
