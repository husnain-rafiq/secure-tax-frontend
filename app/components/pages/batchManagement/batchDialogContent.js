import React from 'react';
import { Box } from '@material-ui/core';
import { Form, Formik } from 'formik';
import moment from 'moment';
import Button from '../../muiButton';
import MuiDatePicker from '../../muiDatePicker';

const batchDialogForm = ({
  handleChangeDialogState,
  name,
  onActionButtonClick,
  buttonType,
}) => (
  <Formik
    initialValues={{ [name]: moment(new Date()) }}
    onSubmit={(values) => {
      const selectedButtonAndDate = {
        [name]: moment(values[name]).format('YYYY-MM-DD'),
        buttonType,
      };
      onActionButtonClick(selectedButtonAndDate);
    }}
  >
    {() => (
      <Form>
        <Box
          flexWrap="wrap"
          flexDirection="row"
          display="flex"
          justifyContent="left"
          alignItems="center"
          mt={5}
        >
          <Box width={1}>
            <Box
              width={1}
              flexWrap="wrap"
              display="flex"
              px={[0, 0, 15]}
              pb={15}
            >
              <MuiDatePicker name={name} />
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                width={1}
                mt={8}
              >
                <Box flex="0.15" mr={5}>
                  <Button
                    value={buttonType === 'Add Batch' ? 'ADD' : 'Update'}
                    variant="contained"
                    color="secondary"
                    fullWidth
                    type="submit"
                  />
                </Box>
                <Box flex="0.15">
                  <Button
                    value="Cancel"
                    variant="contained"
                    color="secondary"
                    onClick={handleChangeDialogState}
                    fullWidth
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Form>
    )}
  </Formik>
);

export default batchDialogForm;
