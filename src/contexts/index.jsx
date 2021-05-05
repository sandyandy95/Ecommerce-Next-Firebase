import PropTypes from 'prop-types';
import SessionState from './session/state';

const Context = ({ children }) => <SessionState>{children}</SessionState>;

Context.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Context;
