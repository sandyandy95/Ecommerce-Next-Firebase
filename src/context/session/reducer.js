import { sessionTypes } from '../types';

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
      return {
        user: {},
        session: {},
      };
    default:
      return state;
  }
};
export default reducer;
