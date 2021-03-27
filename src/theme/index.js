import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        marginBottom: 16,
      },
    },
    MuiPaper: {
      root: {
        border: 'none',
        outline: 'none',
      },
    },
    MuiDivider: {
      root: {
        marginBottom: 8,
      },
    },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'],
    fontStyle: 'normal',
    h5: {
      fontSize: 20,
      fontWeight: 'normal',
    },
    h6: {
      color: '#000',
      fontSize: 18,
      fontWeight: '600',
    },
    body1: {
      color: '#020202',
      fontSize: 16,
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 14,
      color: '#020202',
      fontWeight: 'normal',
    },
    subtitle1: {
      fontSize: 16,
      color: '#020202',
      fontWeight: '600',
    },
    subtitle2: {
      fontSize: 14,
      color: '#020202',
      fontWeight: '500',
    },
    button: {
      fontSize: 14,
      fontWeight: '600',
    },
  },
});

export default responsiveFontSizes(theme);
