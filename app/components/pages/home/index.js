import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DashboardHeader from '../../dashboardHeader';
import DailyStatsBarChart from '../../dailyStatsBarchat';
import WeeklyStatsPieChart from '../../weeklyStatsPiechat';
import DailyUserStats from '../../dailyUserStats';
import ModeOfPaymentPiechat from '../../modeOfPaymentPiechat';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  barAndPieCharts: {
    marginTop: '30px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
  userStatsAndPieCharts: {
    marginTop: '50px',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
    },
  },
}));
function Home() {
  const classes = useStyles();

  return (
    <>
      <Grid xs={12} className={classes.root}>
        <Grid>
          <DashboardHeader />
        </Grid>
        <Grid className={classes.barAndPieCharts}>
          <Grid lg={7} xl={8}>
            <DailyStatsBarChart />
          </Grid>
          <Grid lg={5} xl={4}>
            {' '}
            <WeeklyStatsPieChart />
          </Grid>
        </Grid>
        <Grid className={classes.userStatsAndPieCharts}>
          <Grid lg={7} xl={8}>
            <DailyUserStats />
          </Grid>
          <Grid lg={5} xl={4}>
            <ModeOfPaymentPiechat />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
