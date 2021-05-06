import PropTypes from 'prop-types';
import SessionState from './session/state';
import CartState from './cart/state';

const Context = ({ children }) => (
  <SessionState>
    <CartState>{children}</CartState>
  </SessionState>
);

Context.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Context;
