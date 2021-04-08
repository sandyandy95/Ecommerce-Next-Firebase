/* eslint-disable react/jsx-one-expression-per-line */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { makeStyles, Box, Typography, Link } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './bot.json';
import styles from './styles';

const useStyles = makeStyles(styles);

const LoadingModal = () => {
  const [showMsj, setShowMsj] = useState(false);
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box position="relative">
        <motion.div animate={{ opacity: showMsj ? 1 : 0 }} onMouseOver={() => setShowMsj(true)} onMouseLeave={() => setShowMsj(false)}>
          <Typography className={classes.container} variant="caption">
            <span className={classes.tip} />
            ¿Listo para ponerte en contacto?{' '}
            <Link href="https://wa.link/stss7l" target="_blank">
              Presiona aquí
            </Link>
          </Typography>
        </motion.div>
        <Box onMouseOver={() => setShowMsj(true)} onMouseLeave={() => setShowMsj(false)}>
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData,
            }}
            style={{ maxHeight: 500, maxWidth: 500 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingModal;
