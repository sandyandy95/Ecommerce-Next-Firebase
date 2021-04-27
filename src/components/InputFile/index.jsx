import PropTypes from 'prop-types';
import { Box, Button, FormHelperText, makeStyles } from '@material-ui/core';
import styles from './styles';

const useStyle = makeStyles(styles);

const InputFile = ({
  onChange,
  value,
  multiple,
  accept,
  helperText,
  ...props
}) => {
  const classes = useStyle();
  if (value) {
    return (
      <Box className={classes.container}>
        <img
          className={classes.img}
          alt="file"
          src={`${
            typeof value === 'string' ? value : URL.createObjectURL(value)
          }`}
        />
        <Button variant="contained" color="primary" onClick={() => onChange()}>
          Quitar Imagen
        </Button>
      </Box>
    );
  }
  return (
    <Box className={classes.container}>
      <input
        type="file"
        accept={accept.join(',')}
        multiple={multiple}
        onChange={({ target: { files } }) => onChange(files[0])}
        {...props}
      />
      {helperText && <FormHelperText error>{helperText}</FormHelperText>}
    </Box>
  );
};
InputFile.propTypes = {
  accept: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.any,
  multiple: PropTypes.bool,
  helperText: PropTypes.string,
};
InputFile.defaultProps = {
  accept: ['image/*'],
  multiple: false,
  value: undefined,
  helperText: undefined,
};
export default InputFile;
