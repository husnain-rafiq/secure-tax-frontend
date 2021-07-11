import React from 'react';
import {
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { BodyTextLarge } from '../typography';

const useStyles = makeStyles((theme) => ({
  dropdown: {
    backgroundColor: theme.palette.text.light,
    borderRadius: '5px',
    border: '0.5px',
    color: theme.palette.text.dark,
    '& .MuiSelect-icon ': {
      fontSize: '40px',
      top: '0',
      right: '0',
    },
  },
}));
export default function SelectInput({
  selectId,
  fullWidth,
  options,
  onHandleChange,
  label,
  selectedValue,
  formControlProps,
  placeholder,
  ...props
}) {
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <>
      {label && (
        <Box mb={3}>
          <BodyTextLarge color="dark" bold>
            {label}
          </BodyTextLarge>
        </Box>
      )}
      <FormControl fullWidth={fullWidth} {...formControlProps}>
        <Select
          id={selectId}
          variant="outlined"
          onChange={onHandleChange}
          value={selectedValue}
          displayEmpty
          className={classes.dropdown}
          {...field}
          {...props}
        >
          {placeholder ? (
            <MenuItem value="">
              <em>{placeholder}</em>
            </MenuItem>
          ) : (
            ''
          )}
          {options &&
            options.map((val) =>
              typeof val === 'object' ? (
                <MenuItem value={val.value}>{val.label}</MenuItem>
              ) : (
                <MenuItem value={val}>{val}</MenuItem>
              )
            )}
        </Select>
        {meta.error && meta.touched ? (
          <FormHelperText error>{meta.error}</FormHelperText>
        ) : null}
      </FormControl>
    </>
  );
}

SelectInput.propTypes = {
  selectId: PropTypes.string,
  fullWidth: PropTypes.bool,
  options: PropTypes.array,
  onHandleChange: PropTypes.func,
  selectedValue: PropTypes.string,
  formControlProps: PropTypes.object,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
};

SelectInput.defaultProps = {
  fullWidth: true,
  margin: 'dense',
};
