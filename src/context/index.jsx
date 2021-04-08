import PropTypes from 'prop-types';
import SessionState from './session/state';
import CartState from './cart/state';
import UIState from './ui/state';

const Context = ({ children }) => (
  <UIState>
    <SessionState>
      <CartState>{children}</CartState>
    </SessionState>
  </UIState>
);

Context.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Context;
