import React, { useState } from 'react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import { colors } from '../../theme/colors';

const variantIcon = {
  success: CheckCircleOutlinedIcon,
  error: CancelOutlinedIcon,
};
const useStyles = makeStyles((theme) => ({
  success: {
    backgroundColor: colors.toastColors.success,
  },
  error: {
    backgroundColor: colors.toastColors.error,
  },
  icon: {
    fontSize: 30,
  },
  iconVariant: {
    marginRight: theme.spacing(2),
    color: (props) => props.variantIconColor,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  content: {
    marginBottom: theme.spacing(9),
    borderColor: (props) => props.variantIconColor,
    borderWidth: theme.spacing(0.7),
    borderStyle: 'solid',
    borderRadius: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));
function SnackbarContentWrapper(props) {
  const classes = useStyles(props);
  const { message, variant, onClose, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], classes.content)}
      message={
        <span className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={onClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>,
      ]}
      {...other}
    />
  );
}
export const withSnackbar = (WrappedComponent) => (props) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("I'm a custom snackbar");
  const [duration, setDuration] = useState(2000);
  const [severity, setSeverity] = useState('success');
  let variantIconColor;
  if (severity === 'error') {
    variantIconColor = colors.toastColors.errorBorder;
  } else if (severity === 'success') {
    variantIconColor = colors.toastColors.successBorder;
  }

  const showMessage = (
    messageParam,
    severityParam = 'success',
    durationParam = 5000
  ) => {
    setMessage(messageParam);
    setSeverity(severityParam);
    setDuration(durationParam);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <WrappedComponent {...props} snackbarShowMessage={showMessage} />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={duration}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant={severity}
          message={message}
          variantIconColor={variantIconColor}
        />
      </Snackbar>
    </>
  );
};
