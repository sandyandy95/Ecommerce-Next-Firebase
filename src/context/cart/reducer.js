import { cart } from '../types';

const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case cart.ADD_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case cart.REMOVE_PRODUCT:
      return {
        ...state,
        ...payload,
      };
    case cart.CLEAR_CART:
      return {
        products: [],
      };
    default:
      return state;
  }
};
export default reducer;
