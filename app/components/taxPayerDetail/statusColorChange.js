import { Box } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import body1 from '../typography';
import { colors } from '../../theme/colors';
import { STATUS } from '../../utils/constants';

const {
  PAID,
  OPEN,
  REDEEMED,
  ADJUDICATED,
  CLOSED,
  UNPAID,
  SOLD,
  UNSETTLED,
  SETTLED,
  UNDERREVIEW,
} = STATUS;
const useStyles = makeStyles(() => ({
  colorChange: {
    color: (props) => props.color,
  },
}));

function StatusColorChange(props) {
  let color;
  if (
    props.value === PAID ||
    props.value === OPEN ||
    props.value === REDEEMED ||
    props.value === SETTLED
  ) {
    color = colors.green;
  } else if (
    props.value === SOLD ||
    props.value === ADJUDICATED ||
    props.value === CLOSED
  ) {
    color = colors.red;
  } else if (props.value === UNPAID || props.value === UNSETTLED) {
    color = colors.grey;
  } else if (props.value === UNDERREVIEW) {
    color = colors.purple;
  }
  const classes = useStyles({ color });

  return (
    <Box className={classes.colorChange}>
      <body1>{props.value}</body1>
    </Box>
  );
}

export default StatusColorChange;
