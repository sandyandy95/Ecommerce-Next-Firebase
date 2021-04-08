import { makeStyles, Box } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './loading.json';
import styles from './styles';

const useStyles = makeStyles(styles);
const LoadingScreen = () => {
  const classes = useStyles();

  return (
    <Box open className={classes.root}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        height={700}
        width={700}
      />
    </Box>
  );
};

export default LoadingScreen;
