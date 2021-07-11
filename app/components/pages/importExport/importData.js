import React from 'react';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import { Grid, Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import { Input, Select } from 'components';
import { makeStyles } from '@material-ui/core/styles';
import { MuiFileInput } from '../../muiFileInput';
import { FILE_ACCEPT_TYPES } from '../../../utils/constants';

const useStyles = makeStyles((theme) => ({
  customFileInputStyle: {
    backgroundColor: 'white',
    overflow: 'hidden',

    '& > .MuiBox-root:first-child': {
      marginTop: theme.spacing(3),
    },
    '& > .MuiBox-root .MuiBox-root': {
      display: 'block',
      textAlign: 'right',
      height: '1.2rem',
    },
    '& > .MuiBox-root .MuiBox-root .MuiButtonBase-root': {
      width: 'auto',
      display: 'inline-block',
      height: '2.5rem',
      right: '-3.5rem',
      position: 'relative',
      zIndex: '1',
      opacity: '0',
      top: '-0.80rem',
    },
    '& .MuiIconButton-root': {
      marginRight: theme.spacing(-3.15),
    },
  },
}));
function ImportData({ initialValues, dropDownYearValues }) {
  const classes = useStyles();
  const [year, setYear] = React.useState('All');
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  return (
    <Grid xs={12}>
      <Formik initialValues={initialValues} onSubmit={() => {}}>
        {({ setFieldValue }) => (
          <Form>
            <Box
              mt={5}
              display="flex"
              width={['100%', '70%']}
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Box width={['100%', '68%']} mt={[4, 0]}>
                <Input
                  className={classes.customFileInputStyle}
                  placeholderText="File Path"
                  inputType="file"
                  name="filePath"
                  variant="outlined"
                  appendIcon
                  Icon={FolderOpenOutlinedIcon}
                  IconClickable
                  inputComponent={(props) => (
                    <MuiFileInput
                      setFieldValue={setFieldValue}
                      name="file"
                      acceptTypes={FILE_ACCEPT_TYPES.imageFiles}
                      BtnIcon={FolderOpenOutlinedIcon}
                      {...props}
                    />
                  )}
                />
              </Box>
              <Box width={['100%', '30%']} mt={[4, 0]}>
                <Select
                  name="year"
                  selectId="taxYear"
                  selectedValue={year}
                  options={dropDownYearValues}
                  onHandleChange={handleYearChange}
                />
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Grid>
  );
}
export default ImportData;
