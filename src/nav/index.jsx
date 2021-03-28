import {
  AppBar,
  Box,
  Button,
  Hidden,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import NextLink from '../components/NextLink';
// import PropTypes from 'prop-types';

const MainNav = () => {
  const routes = [
    { href: '/carrito', label: 'carrito' },
    { href: '/admin/usuarios', label: 'admin' },
    { href: '/pedidos', label: 'pedidos' },
    { href: '/pedidos/anteriores', label: 'pedidos anteriores' },
  ];
  return (
    <AppBar position="sticky" top="0px">
      <Toolbar>
        <Box display="flex" flex={1} alignItems="center">
          <Hidden smUp>
            <Menu />
          </Hidden>
          <NextLink href="/">
            <Typography style={{ cursor: 'pointer' }} variant="h4">
              Ecommerce
            </Typography>
          </NextLink>
        </Box>
        <Hidden xsDown>
          {routes.map((item) => (
            <NextLink key={item.href} href={item.href}>
              <Button color="inherit">{item.label}</Button>
            </NextLink>
          ))}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};
MainNav.propTypes = {};
MainNav.defaultProps = {};
export default MainNav;
