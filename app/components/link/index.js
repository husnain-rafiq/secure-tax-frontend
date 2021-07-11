import { Link } from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BodyTextSmall } from '../typography';

const useStyles = makeStyles({
  root: { textDecoration: 'none' },
});
function Index({ value, to, ...props }) {
  const classes = useStyles();

  return (
    <Link to={to} className={classes.root} {...props}>
      <BodyTextSmall color="primary">{value}</BodyTextSmall>
    </Link>
  );
}

export default Index;
