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
    MuiCard: {
      root: {
        overflow: 'initial',
        marginBottom: 16,
      },
    },
    MuiCardActions: {
      root: {
        display: 'flex',
        paddingBottom: 16,
        justifyContent: 'space-evenly',
      },
    },
    MuiButton: {
      root: {
        marginBottom: 16,
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
      marginBottom: 8,
      fontWeight: 'normal',
    },
    body2: {
      fontSize: 14,
      color: '#020202',
      marginBottom: 8,
      fontWeight: 'normal',
    },
    subtitle1: {
      fontSize: 16,
      color: '#020202',
      marginBottom: 8,
      fontWeight: '600',
    },
    subtitle2: {
      fontSize: 14,
      color: '#020202',
      fontWeight: '500',
      marginBottom: 8,
    },
    button: {
      fontSize: 14,
      fontWeight: '600',
    },
  },
});

export default responsiveFontSizes(theme);
