import { Box } from '@material-ui/core';
import React from 'react';
import { H4 } from '../typography';

const PageHeading = ({ heading }) => (
  <Box mb={6}>
    <H4 color="primary" bold>
      {heading}
    </H4>
  </Box>
);
export default PageHeading;
