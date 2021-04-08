import { Box } from '@material-ui/core';
import Lottie from 'react-lottie';
import animationData from './not.json';

const NotFound = () => (
  <Box display="flex" flex={1} justifyContent="center" alignItems="center">
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      }}
      speed={1}
      style={{ maxHeight: 700, maxWidth: 700 }}
    />
  </Box>
);

export default NotFound;
