import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import clsx from 'clsx';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  itemText: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  mobileViewDrawer: {
    display: 'block',
  },
  listItem: {
    padding: theme.spacing(3),
  },
  underline: {
    textDecoration: 'none',
  },
}));
const DrawerListItem = ({ text, mobileOpen }) => {
  const classes = useStyles();

  return (
    <>
      {' '}
      <Link to={text.link} className={classes.underline}>
        <ListItem button key={text} className={classes.listItem}>
          <ListItemIcon>
            <text.icon color="secondary" />
          </ListItemIcon>
          <ListItemText
            className={clsx(classes.itemText, {
              [classes.mobileViewDrawer]: mobileOpen,
            })}
            primary={text.name}
          />
        </ListItem>
        <Divider
          className={clsx(classes.itemText, {
            [classes.mobileViewDrawer]: mobileOpen,
          })}
        />
      </Link>
    </>
  );
};

export default DrawerListItem;
