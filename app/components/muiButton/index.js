import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  button: {
    height: theme.typography.button.height,
    borderRadius: theme.typography.button.borderRadius,
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    fontFamily: theme.typography.button.fontFamily,
  },
}));
const MuiButton = ({ value, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={classes.button} {...props}>
      {value}
    </Button>
  );
};
export default MuiButton;
MuiButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
};
MuiButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};
