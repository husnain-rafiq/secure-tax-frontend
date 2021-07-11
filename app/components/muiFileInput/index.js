import { Box } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import {
  MIN_UPLOADABLE_FILE_SIZE_IN_MBS,
  MAX_UPLOADABLE_FILE_SIZE_IN_MBS,
} from '../../utils/constants';
import Button from '../muiButton';
import { Toast } from '../../utils/helper';

export function MuiFileInput({
  setImgFile,
  setFieldValue,
  name,
  buttonText,
  acceptTypes,
  isLoading,
}) {
  const inputEl = useRef(null);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (error) {
      Toast({
        icon: 'error',
        title: error,
      });
    }
  }, [error]);

  const handleCapture = ({ target }) => {
    if (target.files[0]) {
      if (
        target.files[0].size / 1024 / 1024 <=
        MIN_UPLOADABLE_FILE_SIZE_IN_MBS
      ) {
        setError('Error: File is empty');
      } else if (
        target.files[0].size / 1024 / 1024 >=
        MAX_UPLOADABLE_FILE_SIZE_IN_MBS
      ) {
        setError('Error: File size too large');
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        reader.onloadend = () => {
          setImgFile(reader.result);
        };
        setFieldValue(name, target.files[0]);
        setError(null);
      }
    }
  };
  const handleClick = () => {
    inputEl.current.click();
  };

  return (
    <>
      <Box mb={2} mt={5} width={1}>
        <input
          id={name}
          type="file"
          onChange={handleCapture}
          hidden
          ref={inputEl}
          accept={acceptTypes}
        />
        <Box display="flex" justifyContent="center">
          <Box flex="0.3">
            <Button
              color="secondary"
              fullWidth
              onClick={handleClick}
              variant="contained"
              value={buttonText}
              disabled={isLoading}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
