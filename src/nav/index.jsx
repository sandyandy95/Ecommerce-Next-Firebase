import {
  AppBar,
  Box,
  Button,
  Hidden,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import NextLink from '../components/NextLink';
// import PropTypes from 'prop-types';

const MainNav = ({ disableNav }) => {
  const routes = [
    { href: '/carrito', label: 'carrito' },
    { href: '/admin/usuarios', label: 'admin' },
    { href: '/pedidos', label: 'pedidos' },
    { href: '/pedidos/anteriores', label: 'pedidos anteriores' },
  ];
  return (
    <AppBar position="sticky" top="0px" component={Box} mb={3}>
      <Toolbar>
        <Box display="flex" flex={1} alignItems="center">
          {!disableNav && (
            <Hidden smUp>
              <Menu />
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
    </AppBar>
  );
};
MainNav.propTypes = {
  disableNav: PropTypes.bool.isRequired,
};
export default MainNav;
