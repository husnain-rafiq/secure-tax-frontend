import React, { useState, useCallback } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import { H5 } from 'components';
import Box from '@material-ui/core/Box';
import { barChartColors } from '../dailyStatsBarchat';
import { colors } from '../../theme/colors';
import { RenderColorfulLegendText } from '../weeklyStatsPiechat/renderColorfulLegendText';
import { renderActiveShape } from './renderActiveShape';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0px 8px 7px 0px #DDDDDD',
    marginLeft: '8px',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '35px',
      marginRight: '8px',
    },
  },
  headingBox: {
    borderRadius: '5px',
  },
  heading: {
    color: theme.palette.text.light,
    padding: '15px',
  },
  circle: {
    height: '9px',
    width: '9px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '20px',
  },
  legend: {
    display: 'grid',
    [theme.breakpoints.down('xs')]: {
      flexDirextion: 'column',
    },
    justifyContent: 'center',
    gridTemplateColumns: 'max-content max-content',
    gap: '3em',
  },
}));

const ModeOfPaymentPiechat = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const data = [
    { name: 'Cheque', value: 400 },
    { name: 'Credit Card', value: 300 },
    { name: 'Cash', value: 800 },
  ];

  return (
    <Box className={classes.root}>
      <Box bgcolor="primary.main" className={classes.headingBox}>
        <H5 className={classes.heading}>Mode of Payment (Weekly Stats)</H5>
      </Box>
      <Box mt={9}>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              margin={{
                top: 100,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={120}
              dataKey="value"
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              innerRadius={95}
              onMouseEnter={onPieEnter}
            >
              {barChartColors.map((entry) => (
                <Cell key={entry} fill={`${colors.chartsColors[entry]}`} />
              ))}
            </Pie>
            <Legend content={<RenderColorfulLegendText data={data} />} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};
export default ModeOfPaymentPiechat;
