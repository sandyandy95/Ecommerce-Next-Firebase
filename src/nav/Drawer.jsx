import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { ExitToApp } from '@material-ui/icons';
import { useContext } from 'react';
import NextLink from '../components/NextLink';
import useUser from '../hooks/useUser';
import SessionContext from '#src/contexts/session/context';

const DrawerNav = ({ routes, open, handleClose }) => {
  const { user } = useUser();
  const { signOut } = useContext(SessionContext);

  return (
    <Drawer open={open} onClose={handleClose}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <Avatar src={user.photoURL} sizes="" color="secondary" />
        <Typography>{user.displayName}</Typography>
      </Box>
      <Divider />
      <List>
        {routes.map((item) => (
          <NextLink key={item.href} href={item.href}>
            <ListItem button>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label.toUpperCase()} />
            </ListItem>
          </NextLink>
        ))}
        {user.displayName && (
          <ListItem button onClick={signOut}>
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary={'Cerrar sesión'.toUpperCase()} />
          </ListItem>
        )}
      </List>
    </Drawer>
  );
};

DrawerNav.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DrawerNav;
