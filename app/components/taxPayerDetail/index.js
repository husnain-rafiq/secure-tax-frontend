import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import StatusColorChange from './statusColorChange';

const useStyles = makeStyles(() => ({
  typography: {
    fontWeight: 700,
  },
}));

function TaxPayerDetail({ taxPayerList }) {
  const classes = useStyles({ taxPayerList });

  return (
    <Box display="flex" height="100%" flexWrap="wrap">
      {taxPayerList?.map((item) => (
        <Box display="flex" width="50%">
          <Box mr={12} width="30%">
            {item.keys}:
          </Box>
          <Box className={classes.typography}>
            <StatusColorChange value={item.value} />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default TaxPayerDetail;
