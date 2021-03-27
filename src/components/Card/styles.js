import { red } from '@material-ui/core/colors';

const styles = (theme) => ({
  root: {
    maxWidth: 345,
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
  },
  media: {
    height: 250,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default styles;
