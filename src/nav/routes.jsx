import { AvTimer, LocalMall, Person, ShoppingCart, SupervisorAccount } from '@material-ui/icons';

const routes = ({ uid }) => ({
  admin: [
    { href: '/admin/usuarios', label: 'Usuarios', icon: <SupervisorAccount /> },
    { href: '/admin/pedidos', label: 'Ventas', icon: <LocalMall /> },
  ],
  user: [
    { href: '/carrito', label: 'carrito', icon: <ShoppingCart /> },
    {
      href: 'cliente/[uid]/compras',
      as: `/cliente/${uid}/compras`,
      label: 'Compras',
      icon: <AvTimer />,
    },
  ],
  seller: [
    {
      href: '/usuario/[uid]/pedidos',
      as: `/usuario/${uid}/pedidos`,
      label: 'pedidos',
      icon: <LocalMall />,
    },
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
