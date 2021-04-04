import { AvTimer, LocalMall, Person, ShoppingCart, SupervisorAccount } from '@material-ui/icons';

const routes = ({ uid }) => ({
  admin: [{ href: '/admin/usuarios', label: 'admin', icon: <SupervisorAccount /> }],
  user: [
    { href: '/carrito', label: 'carrito', icon: <ShoppingCart /> },
    {
      href: '/compras',
      label: 'Compras',
      icon: <AvTimer />,
    },
  ],
  seller: [
    { href: '/pedidos', label: 'pedidos', icon: <LocalMall /> },
    {
      href: '/usuario/[uid]/productos',
      // href: `/usuario/${user.uid}/productos`,
      as: `/usuario/${uid}/productos`,
      label: 'Perfil',
      icon: <Person />,
    },
  ],
});

export default routes;
