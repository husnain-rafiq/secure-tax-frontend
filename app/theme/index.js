import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { colors } from './colors';

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
      light: colors.light,
      mainGradient: colors.mainGradient,
    },
    secondary: {
      main: colors.secondary,
    },
    background: colors.background,
    text: colors.textColor,
  },
  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: ['FuturaBold', 'AmsiPro'],
    h1: {
      fontSize: '2.125rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.75rem',
      color: colors.textColor.primary,
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.375rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.125rem',
      color: colors.textColor.primary,
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      color: colors.textColor.primary,
      fontWeight: 700,
    },

    body1: {
      fontWeight: 200,
      fontSize: '1rem',
      color: colors.textColor.secondary,
      fontFamily: 'AmsiPro',
    },
    body2: {
      fontWeight: 200,
      fontSize: '0.938rem',
      color: colors.textColor.secondary,
      fontFamily: 'AmsiPro',
    },
    button: {
      textTransform: 'capitalize',
      fontWeight: 700,
      fontSize: '0.8rem',
      height: '38px',
      borderRadius: '5px',
      fontFamily: 'FuturaBold',
      color: colors.textColor.light,
    },
  },
});
const updatedTheme = responsiveFontSizes(theme);
export default updatedTheme;
