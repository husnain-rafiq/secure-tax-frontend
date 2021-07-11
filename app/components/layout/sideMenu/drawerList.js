import React from 'react';
import { Box } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DrawerListItem from './drawerListItem';
import { useAuthContext } from '../../../context/authContext';
import { menuItems } from './menuItems';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
}));

function DrawerList({ handleDrawerToggle, mobileOpen }) {
  const classes = useStyles();
  const { user } = useAuthContext();
  return (
    <Box mt={15}>
      <ListItem
        button
        className={classes.menuButton}
        onClick={handleDrawerToggle}
      >
        <ListItemIcon>
          <MenuIcon color="secondary" />
        </ListItemIcon>
      </ListItem>
      <Box mt={5}>
        {menuItems &&
          menuItems.length > 0 &&
          menuItems.map((item) => (
            <>
              {item.role ? (
                item.role.indexOf(user.data.roleLabel) !== -1 && (
                  <DrawerListItem text={item} mobileOpen={mobileOpen} />
                )
              ) : (
                <DrawerListItem text={item} mobileOpen={mobileOpen} />
              )}
            </>
          ))}
      </Box>
    </Box>
  );
}

export default DrawerList;
