import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: '20%',
        '@media (min-width:960px)': { minWidth: 82 },
      },
    },
    MuiPaper: {
      root: {
        border: 'none',
        outline: 'none',
      },
      elevation1: {
        boxShadow:
          ' 0px 1px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.14)',
      },
    },
    MuiDivider: {
      root: {
        marginTop: 24,
        marginBottom: 8,
      },
    },
    MuiPickersBasePicker: { pickerView: { backgroundColor: 'white' } },
    MuiDialogActions: { root: { background: 'white' } },
    MuiPickersDay: {
      day: {
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '0px',
      },
      daySelected: {
        backgroundColor: '',
        color: '#B29602',
      },
      dayDisabled: { color: '#a0a3a6' },
      current: { color: '#ffcb05' },
    },
  },
  typography: {
    fontFamily: ['Nunito', 'Roboto', 'sans-serif'],
    fontStyle: 'normal',
    h1: { color: '#000' },
    h2: { color: '#000' },
    h3: { color: '#000' },
    h4: { color: '#000' },
    h5: {
      fontSize: 20,
      fontWeight: 'normal',
      // lineHeight: "32px",
    },
    h6: {
      color: '#000',
      fontSize: 18,
      fontWeight: '600',
      // lineHeight: "32px",
    },
    body1: {
      color: '#020202',
      fontSize: 16,
      fontWeight: 'normal',
      // lineHeight: "24px",
    },
    body2: {
      fontSize: 14,
      color: '#020202',
      fontWeight: 'normal',
      // lineHeight: "20px",
    },
    subtitle1: {
      fontSize: 16,
      color: '#020202',
      fontWeight: '600',
      // lineHeight: "28px",
    },
    subtitle2: {
      fontSize: 14,
      color: '#020202',
      fontWeight: '500',
      // lineHeight: "21px",
    },
    button: {
      fontSize: 14,
      fontWeight: '600',
    },
  },

  palette: {
    primary: {
      main: '#051438',
      dark: '#000014',
      light: '#333962',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#f20020',
      dark: '#b60000',
      light: '#ff574b',
      contrastText: '#FFFFFF',
    },
    action: {
      hover: 'rgb(0,0,0,0.04)',
      selectedOpacity: 'rgb(0,0,0,0.08)',
      disabledBackground: 'rgba(0,0,0,0.12)',
    },
    background: '#fff',
    error: { main: red.A400 },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.54)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    gray: '#E0E0E0',
  },
});

export default responsiveFontSizes(theme);
