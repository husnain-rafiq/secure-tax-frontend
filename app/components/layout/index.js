import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import SideMenu from './sideMenu';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },
  rootGrid: {
    overflow: 'auto',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  headerGrid: {
    width: '100%',
    display: 'flex',
    position: 'fixed',
    zIndex: 10,
  },
  bodyGrid: {
    flex: 1,
    width: '100%',
    marginTop: '5rem',
    display: 'grid',
    height: 'auto',
  },
  footerGrid: {
    zIndex: 10,
  },
  menuGrid: {
    height: '100%',
    zIndex: 5,
    display: 'block',
    position: 'fixed',
    left: 0,
    /* top: 0, */
    bottom: 0,
    overflow: 'auto',
    width: '11vw',
    [theme.breakpoints.up('md')]: {
      width: '15vw',
    },
    [theme.breakpoints.up('sm')]: {
      width: '6.5vw',
    },

    '&::-webkit-scrollbar': {
      width: '0.6rem',
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
      backgroundColor: theme.palette.primary.main,
      opacity: '0.1',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: '10px',
    },
  },
  contentGrid: {
    flex: 1,
    padding: '1rem',
    overflow: 'auto',
    display: 'flex',
    marginLeft: '8vw',
    marginRight: '0.95vw',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '7vw',
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '21vw',
    },
  },
}));
const Layout = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();
  const routesToMatch = ['', 'forgot-password', 'reset-password'];
  const accessDashboard = routesToMatch.includes(location.pathname.slice(1));
  return (
    <Box
      className={classes.root}
      bgcolor={accessDashboard ? 'background.secondary' : 'background.primary'}
    >
      {accessDashboard && (
        <Grid xs={12} className={classes.rootGrid}>
          {children}
        </Grid>
      )}
      {!accessDashboard && (
        <Grid xs={12} className={classes.rootGrid}>
          <Grid item className={classes.headerGrid}>
            <Header />
          </Grid>
          <Grid item className={classes.bodyGrid}>
            <Grid item id="newmenu" className={classes.menuGrid}>
              <SideMenu />
            </Grid>
            <Grid item id="newmenu" className={classes.contentGrid}>
              <> {children}</>
            </Grid>
          </Grid>
          <Grid item className={classes.footerGrid}>
            <Footer />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Layout;
