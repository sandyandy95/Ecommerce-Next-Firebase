import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

const Input = ({
  variant,
  value,
  onChange,
  label,
  helperText,
  className,
  error,
  ...rest
}) => (
  <TextField
    variant="outlined"
    value={value}
    onChange={onChange}
    label={label}
    helperText={helperText}
    className={className}
    error={error}
    {...rest}
  />
);
Input.propTypes = {
  variant: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.shape(),
  error: PropTypes.bool,
};
Input.defaultProps = {
  variant: 'outline',
  className: {},
  helperText: '',
  value: '',
  label: '',
  error: false,
};
export default Input;
