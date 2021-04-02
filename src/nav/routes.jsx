import {
  AvTimer,
  LocalMall,
  Person,
  ShoppingCart,
  SupervisorAccount,
} from '@material-ui/icons';

const routes = ({ uid }) => [
  { href: '/carrito', label: 'carrito', icon: <ShoppingCart /> },
  { href: '/admin/usuarios', label: 'admin', icon: <SupervisorAccount /> },
  { href: '/pedidos', label: 'pedidos', icon: <LocalMall /> },
  {
    href: '/pedidos/anteriores',
    label: 'pedidos anteriores',
    icon: <AvTimer />,
  },
  {
    href: '/usuario/[uid]/productos',
    // href: `/usuario/${user.uid}/productos`,
    as: `/usuario/${uid}/productos`,
    label: 'Perfil',
    icon: <Person />,
  },
];

export default routes;
