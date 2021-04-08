import Lottie from 'react-lottie';
import { Box, Typography } from '@material-ui/core';
import animationData from './animation.json';

const Page = () => (
  <Box>
    <Typography align="center" variant="h2" color="secondary">
      Estamos verificando tu cuenta
    </Typography>
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,
      }}
      speed={0.4}
      style={{ maxHeight: 500, maxWidth: 500 }}
    />
  </Box>
);
Page.propTypes = {};
Page.defaultProps = {};
export default Page;
