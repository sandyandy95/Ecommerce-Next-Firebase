import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { InputLabel, MenuItem, FormControl, Select, FormHelperText } from '@material-ui/core';
import styles from './styles';

const useStyles = makeStyles(styles);

const Selector = ({ helperText, value, options, onChange, initialLabel, disabled }) => {
  const classes = useStyles();
  return (
    <>
      <FormControl fullWidth variant="outlined" className={classes.formControl}>
        <InputLabel>{initialLabel}</InputLabel>
        <Select
          MenuProps={{ classes: { paper: classes.select } }}
          label={initialLabel}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          disabled={disabled}
        >
          {options.map(({ label, value: _val }, key) => (
            <MenuItem key={key} value={_val}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {helperText && (
        <FormHelperText className={classes.helperText} error>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

Selector.propTypes = {
  helperText: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func.isRequired,
  initialLabel: PropTypes.string,
  disabled: PropTypes.bool,
};
Selector.defaultProps = {
  helperText: '',
  value: '',
  options: [],
  initialLabel: 'Selecciona una opción',
  disabled: false,
};
export default Selector;
