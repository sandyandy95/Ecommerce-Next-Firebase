import { uiTypes } from '../types';

const reducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case uiTypes.SHOW_LOADING_FETCH:
      return {
        ...state,
        loading: true,
      };
    case uiTypes.HIDE_LOADING_FETCH:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
