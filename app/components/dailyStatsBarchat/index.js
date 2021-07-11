import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import { H5 } from 'components';
import Box from '@material-ui/core/Box';
import { colors } from '../../theme/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    marginLeft: '8px',
    borderRadius: '10px',
    boxShadow: '0px 8px 7px 0px #DDDDDD',
  },
  headingBox: {
    borderRadius: '5px',
  },
  heading: {
    color: theme.palette.text.light,
    padding: '15px',
  },
}));
export const barChartColors = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
];

const DailyStatsBarChart = () => {
  const classes = useStyles();

  const data = [
    {
      name: 'Tax Collected $',
      uv: 350,
    },
    {
      name: 'Tax Notices Entertained',
      uv: 300,
    },
    {
      name: 'Paid Tax Notices',
      uv: 200,
    },
    {
      name: 'Unpaid Tax Notices',
      uv: 278,
    },
  ];

  return (
    <Box className={classes.root}>
      <Box bgcolor="primary.main" className={classes.headingBox}>
        <H5 className={classes.heading}>Daily Stats</H5>
      </Box>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={data}
          barSize={50}
          barCategoryGap="50%"
          margin={{
            top: 30,
            right: 15,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid x="0" y="1" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />

          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="uv">
            {barChartColors.map((entry) => (
              <Cell key={entry} fill={`${colors.chartsColors[entry]}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};
export default DailyStatsBarChart;
