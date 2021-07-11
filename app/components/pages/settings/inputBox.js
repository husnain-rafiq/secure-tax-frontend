import React from 'react';
import { Box } from '@material-ui/core';

const InputBox = ({ children }) => (
  <Box width={[1, 1, 1 / 2]} mt={5} pr={[0, 0, 3]}>
    {children}
  </Box>
);

export default InputBox;
