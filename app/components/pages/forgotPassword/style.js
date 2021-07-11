import { makeStyles } from '@material-ui/core/styles';
import bg from '../../../images/LoginPng.png';

const useStyles = makeStyles((theme) => ({
  bgContainer: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    height: '90vh',
    '@media (max-width:991px)': {
      backgroundPosition: '0% 0%',
    },
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
  },
  welcomBox: {
    position: 'relative',
    zIndex: '1',
    background: theme.palette.primary.mainGradient,
    padding: '30px 60px',
    color: '#fff',
    textAlign: 'center',
    borderRadius: '10px',
    margin: '-5px 15px',
    boxShadow: '0px 3px 6px #00000029',
  },
  logoStyle: {
    width: 70,
  },
  loginBox: {
    position: 'relative',
    zIndex: '0',
    marginTop: '-50px',
    padding: '25px 60px',
    borderRadius: '10px',
  },
  loginBtn: {
    paddingLeft: '40px',
    paddingRight: '40px',
  },
  centerAlign: {
    display: 'flex',
    justifyContent: 'center',
  },
  error: {
    color: theme.palette.text.error,
    textAlign: theme.palette.text.error,
  },
}));
export default useStyles;
