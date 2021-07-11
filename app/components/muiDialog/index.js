import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { H4 } from '../index';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(-5),
  },
}));

export default function MuiDialog({
  onClose,
  open,
  title,
  fullWidth,
  maxWidth,
  children,
}) {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      <DialogTitle id="form-dialog-title" className={classes.title}>
        <H4 align="center">{title}</H4>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

MuiDialog.propTypes = {
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.element,
};
MuiDialog.defaultProps = {
  fullWidth: true,
  maxWidth: 'sm',
};
