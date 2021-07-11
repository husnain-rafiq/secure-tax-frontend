import React from 'react';
import { Button } from '@material-ui/core';
import CloudDownloadOutlinedIcon from '@material-ui/icons/CloudDownloadOutlined';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';

const ImportExportButton = ({ value }) => (
  <Button
    variant="contained"
    color="secondary"
    size="large"
    startIcon={
      value === 3 ? (
        <CloudDownloadOutlinedIcon fontSize="small" />
      ) : (
        <CloudUploadOutlinedIcon fontSize="small" />
      )
    }
  >
    {value === 3 ? 'Export' : 'Import'}
  </Button>
);

export default ImportExportButton;
