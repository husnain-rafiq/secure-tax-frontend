import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import DrawerList from './drawerList';

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: '20%',
    [theme.breakpoints.down('md')]: {
      width: '50px',
    },
  },
  tempDrawerPaper: {
    width: '330px',
  },
}));

function SideMenu() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.tempDrawerPaper,
          }}
        >
          <DrawerList
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />{' '}
        </Drawer>
      </Hidden>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
        }}
        variant="permanent"
        open
      >
        <DrawerList handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
}

export default SideMenu;
