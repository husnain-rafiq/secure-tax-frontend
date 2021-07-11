import React from 'react';
import _ from 'lodash';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { barChartColors } from '../dailyStatsBarchat';
import { colors } from '../../theme/colors';

const useStyles = makeStyles((theme) => ({
  legend: {
    justifyContent: 'center',
    display: 'grid',
    gap: '1rem',

    gridTemplateColumns: 'max-content max-content',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      display: 'flex',
      gap: '0rem',
    },
  },
  circle: {
    height: '9px',
    width: '9px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '15px',
  },
  name: {
    flex: '0.5',
    marginBlock: '0.2rem',
  },
}));
export const RenderColorfulLegendText = (data) => {
  const classes = useStyles();
  const dataToShow = data.data;

  return (
    <Box className={classes.legend}>
      {_.zip(dataToShow, barChartColors).map((entry, index) => {
        const linkBarChartColors = barChartColors[index];
        const linkData = dataToShow[index];
        return (
          <span className={classes.name}>
            {linkData && linkData.name ? (
              <span
                style={{
                  backgroundColor: `${colors.chartsColors[linkBarChartColors]}`,
                }}
                className={classes.circle}
              ></span>
            ) : null}
            {linkData && linkData.name}
          </span>
        );
      })}
    </Box>
  );
};
