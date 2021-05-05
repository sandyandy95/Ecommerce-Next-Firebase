import { sessionTypes } from '../types';

export const initialState = {
  user: {},
  session: {},
};
const reducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case sessionTypes.LOGIN:
      return {
        ...state,
        session: payload.session,
        user: payload.user,
      };
    case sessionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
