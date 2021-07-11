import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { H2 } from 'components';

import bg from '../../images/dashboardHeader.png';

const useStyles = makeStyles((theme) => ({
  bgContainer: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    borderRadius: '25px',
    height: '24vh',
    backgroundSize: 'cover',
    marginTop: '50px',
    display: 'flex',
    justifyContent: 'center',
  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'inline-grid',
    },
  },
}));
const DashboardHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.bgContainer}>
      <Box className={classes.titleBox}>
        <Box mr={2}>
          <H2 color="primary" light align="center">
            Good Morning,{' '}
          </H2>
        </Box>
        <H2 color="primary" bold align="center">
          Richard
        </H2>
      </Box>
    </Box>
  );
};
export default DashboardHeader;
