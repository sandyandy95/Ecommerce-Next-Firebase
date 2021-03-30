import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import NextLink from '../components/NextLink';
import useUser from '../hooks/useUser';
import DrawerNav from './Drawer';
import _routes from './routes';

const MainNav = ({ disableNav }) => {
  const { user } = useUser();
  const routes = _routes({ uid: user.uid });
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
          <NextLink href="/" scroll>
            <Typography style={{ cursor: 'pointer' }} variant="h4">
              Ecommerce
            </Typography>
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
