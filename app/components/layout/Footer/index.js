import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.primary.mainGradient,
    '& .MuiToolbar-regular ': {
      minHeight: 40,
    },
  },
  footerText: {
    display: 'flex',
    justifyContent: 'center',
  },
}));
const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.footerText}>
        <Typography color="inherit" align="center">
          Copyright © {currentYear}. All Rights Reserved. Powered By Coast
          Technologies
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
