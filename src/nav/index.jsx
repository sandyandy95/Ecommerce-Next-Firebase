import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import {
  AvTimer,
  LocalMall,
  Menu,
  ShoppingCart,
  SupervisorAccount,
} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import NextLink from '../components/NextLink';
import DrawerNav from './Drawer';
// import PropTypes from 'prop-types';

const MainNav = ({ disableNav }) => {
  const routes = [
    { href: '/carrito', label: 'carrito', icon: <ShoppingCart /> },
    { href: '/admin/usuarios', label: 'admin', icon: <SupervisorAccount /> },
    { href: '/pedidos', label: 'pedidos', icon: <LocalMall /> },
    {
      href: '/pedidos/anteriores',
      label: 'pedidos anteriores',
      icon: <AvTimer />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky" top="0px" component={Box} mb={3}>
      <Toolbar>
        <Box display="flex" flex={1} alignItems="center">
          {!disableNav && (
            <Hidden smUp>
              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <Menu />
              </IconButton>
            </Hidden>
          )}
          <NextLink href="/">
            <Typography style={{ cursor: 'pointer' }} variant="h4">
              Ecommerce
            </Typography>
          </NextLink>
        </Box>
        {!disableNav && (
          <Hidden xsDown>
            {routes.map((item) => (
              <NextLink key={item.href} href={item.href}>
                <Button color="inherit">{item.label}</Button>
              </NextLink>
            ))}
          </Hidden>
        )}
      </Toolbar>
      {!disableNav && (
        <DrawerNav
          routes={routes}
          open={open}
          handleClose={() => setOpen(false)}
        />
      )}
    </AppBar>
  );
};
MainNav.propTypes = {
  disableNav: PropTypes.bool.isRequired,
};
export default MainNav;
