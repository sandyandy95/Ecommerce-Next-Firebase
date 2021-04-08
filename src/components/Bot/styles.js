import { fade } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
    right: 0,
    zIndex: 4532,
    width: 180,
    background: `radial-gradient(circle 90px, transparent,${fade(theme.palette.primary.main, 0.7)}, transparent,transparent)`,
  },
  container: {
    position: 'absolute',
    color: 'gray',
    background: 'white',
    zIndex: 4532,
    border: '1px solid gray',
    borderRadius: 5,
    top: '30%',
    left: '-89%',
    width: '100%',
    padding: theme.spacing(1),
    cursor: 'pointer',
  },
  tip: {
    content: '',
    display: 'flex',
    position: 'absolute',
    zIndex: 4542,
    width: 0,
    height: 0,
    background: 'transparent',
    border: '10px solid gray',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    bottom: '30%',
    left: '100%',
  },
});

export default styles;
