import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-adornedEnd ': {
      paddingRight: theme.spacing(2),
    },
  },
  label: {
    color: theme.palette.text.info,
  },
  customInputFieldStyle: {
    border: '0.5px',
    borderRadius: '5px',
    backgroundColor: theme.palette.background.secondary,
    color: theme.palette.text.dark,
    '& .MuiIconButton-root': {
      padding: '0px',
      color: theme.palette.primary.main,
    },
  },
}));
