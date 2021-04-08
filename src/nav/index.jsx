import { AppBar, Box, Button, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import { useContext, useState } from 'react';
import SessionContext from '#src/context/session/context';
import NextLink from '../components/NextLink';
import useUser from '../hooks/useUser';
import DrawerNav from './Drawer';
import _routes from './routes';
import animationData from './logo.json';

const MainNav = ({ disableNav, role }) => {
  const { user } = useUser();
  const routes = role ? _routes({ uid: user.uid })[role] : [];
  const [open, setOpen] = useState(false);
  const { signOut } = useContext(SessionContext);
  const labelRole = role ? { seller: 'Vendedor', admin: 'Admin', user: 'Usuario' }[role] : '';
  const [play, setPlay] = useState(false);

  return (
    <AppBar position="sticky" top="0px" component={Box} mb={3}>
      <Toolbar>
        <Box display="flex" flex={1} alignItems="center">
          {!disableNav && routes.length > 0 && (
            <Hidden smUp>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <Menu />
              </IconButton>
            </Hidden>
          )}
          <NextLink href="/">
            <Box display="flex" justifyContent="center" alignItems="center" onMouseLeave={() => setPlay(false)} onMouseOver={() => setPlay(true)}>
              <Lottie
                options={{
                  loop: true,
                  autoplay: play,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                  },
                }}
                isPaused={!play}
                speed={1}
                style={{ maxHeight: 35, maxWidth: 35 }}
              />
              <Typography style={{ cursor: 'pointer' }} variant="h4">
                Ecommerce
              </Typography>
              <sub>{labelRole}</sub>
            </Box>
          </NextLink>
        </Box>
        {!disableNav && (
          <Hidden xsDown>
            {routes.map((item) => (
              <NextLink key={item.href} href={item.href} as={item.as || ''}>
                <Button color="inherit" style={{ margin: 'auto' }}>
                  {item.label}
                </Button>
              </NextLink>
            ))}
            {routes.length > 0 && user?.uid && (
              <Button color="inherit" style={{ margin: 'auto' }} onClick={signOut}>
                Cerrar sesión
              </Button>
            )}
          </Hidden>
        )}
      </Toolbar>
      {!disableNav && <DrawerNav routes={routes} open={open} handleClose={() => setOpen(false)} signOut={signOut} />}
    </AppBar>
  );
};
MainNav.propTypes = {
  disableNav: PropTypes.bool.isRequired,
  role: PropTypes.string,
};
MainNav.defaultProps = {
  role: undefined,
};
export default MainNav;
