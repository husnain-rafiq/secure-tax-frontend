import {
  AppBar,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { H2 } from 'components';
import { useAuthContext } from '../../../context/authContext';
import Logo from '../../../images/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    height: '3.75rem',
    background: theme.palette.primary.mainGradient,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    justifyContent: 'center',
    padding: '0 15px',
  },
  toolbar: { display: 'flex', justifyContent: 'space-between' },
  title: {
    flexGrow: 1,
  },
  logoStyle: {
    width: 47,
    height: 41,
  },
  profileBox: {
    display: 'flex',
  },
  appBarHeading: {
    color: theme.palette.text.light,
    letterSpacing: '1.2px',
  },
}));

export default function Header() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, setUser } = useAuthContext();
  const userAvatar = user?.data?.photo;
  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleProfile = () => {
    setAnchorEl(null);
    history.push('/profile');
  };
  const handleLogout = () => {
    setUser({
      data: {},
      isAuthenticated: false,
      token: null,
    });
  };
  return (
    <>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/home">
            <img
              src={Logo}
              alt="secure tax office logo"
              className={classes.logoStyle}
            />
          </Link>
          <H2 className={classes.appBarHeading}>SECURE TAX OFFICE</H2>
          {user.isAuthenticated && (
            <Box className={classes.profileBox}>
              <>
                <Button onClick={handleClick}>
                  <Avatar alt="avatar" src={userAvatar} sizes="200px" />
                </Button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  elevation={0}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                >
                  <MenuItem onClick={handleProfile}>
                    <ListItemIcon>
                      <EditIcon color="secondary" />
                    </ListItemIcon>
                    Edit Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <ListItemIcon>
                      <ExitToAppIcon color="secondary" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
