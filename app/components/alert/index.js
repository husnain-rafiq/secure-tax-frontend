import React from 'react';
import { Snackbar, Box, SnackbarContent, IconButton } from '@material-ui/core';
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
    marginBottom: '2.3rem',
    borderColor: (props) => props.variantIconColor,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: '5px',
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
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
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

export default function Toast({ children, variant }) {
  const [open, setOpen] = React.useState(true);
  let variantIconColor;
  if (variant === 'error') {
    variantIconColor = colors.toastColors.errorBorder;
  } else if (variant === 'success') {
    variantIconColor = colors.toastColors.successBorder;
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
          variant={variant}
          message={children}
          variantIconColor={variantIconColor}
        />
      </Snackbar>
    </Box>
  );
}
