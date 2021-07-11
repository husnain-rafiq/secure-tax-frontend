import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { H5 } from 'components';
import { colors } from '../../theme/colors';
import { barChartColors } from '../dailyStatsBarchat';
import { RenderColorfulLegendText } from './renderColorfulLegendText';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    boxShadow: '0px 8px 7px 0px #DDDDDD',
    marginLeft: '8px',
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
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const WeeklyStatsPieChart = () => {
  const classes = useStyles();

  const data = [
    { name: 'Payment Collected', value: 400 },
    { name: 'Tax Notices Entertained', value: 300 },
    { name: 'Paid Tax Notices', value: 300 },
    { name: 'Unpaid Tax Notices', value: 200 },
  ];

  return (
    <Box className={classes.root}>
      <Box bgcolor="primary.main" className={classes.headingBox}>
        <H5 className={classes.heading}>Weekly Stats</H5>
      </Box>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={120}
            dataKey="value"
          >
            {barChartColors.map((entry) => (
              <Cell key={entry} fill={`${colors.chartsColors[entry]}`} />
            ))}
          </Pie>
          <Tooltip />

          <Legend content={<RenderColorfulLegendText data={data} />} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default WeeklyStatsPieChart;
