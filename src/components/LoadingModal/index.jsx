import { useContext } from 'react';
import { makeStyles, Modal } from '@material-ui/core';
import Lottie from 'react-lottie';
import UIContext from '#src/context/ui/context';
import animationData from './loading.json';
import styles from './styles';

const useStyles = makeStyles(styles);
const LoadingModal = () => {
  const {
    state: { loading },
  } = useContext(UIContext);
  const classes = useStyles();

  return (
    <Modal open={loading} className={classes.root}>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        height={400}
        width={400}
      />
    </Modal>
  );
};

export default LoadingModal;
