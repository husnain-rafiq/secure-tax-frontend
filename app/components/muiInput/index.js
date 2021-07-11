/**
 *
 * InputField
 *
 */

import {
  Box,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { BodyTextLarge } from '../typography';

const useStyles = makeStyles((theme) => ({
  label: {
    color: theme.palette.text.info,
  },
  inputBackgroundColor: {
    backgroundColor: theme.palette.background.secondary,
  },
  customInputFieldStyle: {
    border: '0.5px',
    borderRadius: '5px',
    color: theme.palette.text.dark,
  },
}));

function InputField({
  placeholderText,
  Icon,
  inputType,
  inputID,
  onIconClick,
  isDisabled,
  appendIcon,
  fullWidth,
  variant,
  formControlProps,
  IconClickable,
  helperText,
  showInputLabel,
  label,
  ...props
}) {
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <FormControl
      fullWidth={fullWidth}
      error={meta.touched && meta.error}
      {...formControlProps}
      variant={variant}
    >
      {variant === 'outlined' ? (
        <>
          {label && (
            <Box mb={3}>
              <BodyTextLarge color="dark" bold>
                {label}
              </BodyTextLarge>
            </Box>
          )}

          <OutlinedInput
            id={inputID}
            type={inputType}
            disabled={isDisabled}
            className={clsx(
              classes.customInputFieldStyle,
              classes.inputBackgroundColor
            )}
            placeholder={placeholderText}
            endAdornment={
              Icon &&
              appendIcon && (
                <InputAdornment position="end">
                  {IconClickable ? (
                    <IconButton onClick={onIconClick} {...props}>
                      <Icon />
                    </IconButton>
                  ) : (
                    <Icon />
                  )}
                </InputAdornment>
              )
            }
            {...field}
            {...props}
          />
        </>
      ) : (
        <>
          <InputLabel className={classes.label} htmlFor={inputID}>
            {placeholderText}
          </InputLabel>
          <Input
            id={inputID}
            type={inputType}
            disabled={isDisabled}
            className={{ input: classes.customInputFieldStyle }}
            endAdornment={
              Icon &&
              appendIcon && (
                <InputAdornment position="end">
                  {IconClickable ? (
                    <IconButton onClick={onIconClick} {...props}>
                      <Icon />
                    </IconButton>
                  ) : (
                    <Icon color="action" />
                  )}
                </InputAdornment>
              )
            }
            {...field}
            {...props}
          />
        </>
      )}
      {meta.touched && meta.error ? (
        <FormHelperText error>{meta.error}</FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default memo(InputField);

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  isDisabled: PropTypes.bool,
  placeholderText: PropTypes.string,
  Icon: PropTypes.object,
  inputType: PropTypes.string,
  inputID: PropTypes.string,
  onIconClick: PropTypes.func,
  appendIcon: PropTypes.bool,
  variant: PropTypes.string,
  formControlProps: PropTypes.object,
  IconClickable: PropTypes.bool,
  showInputLabel: PropTypes.bool,
  margin: PropTypes.string,
  label: PropTypes.string,
};
InputField.defaultProps = {
  fullWidth: true,
  IconClickable: false,
  showInputLabel: true,
  margin: 'dense',
};

// Usage

/* <Input
  placeholderText="Input Field"
  Icon={EmailIcon}
  inputType="text"
  onInputChange={handleChange}
  inputID="abc"
  onIconClick={handleChange}
  Icon={EmailIcon}
  placeholderText="Email"
  appendIcon={true}
  prependIcon={false}
  formControlProps={{ fullWidth: true }}
  ...otherProps
  />; */
