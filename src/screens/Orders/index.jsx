import { Avatar, Box, IconButton, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import MUIDataTable from 'mui-datatables';
import ContainerResponsive from '../../components/Container';
import useOrders from '../../hooks/useOrders';

const columns = [
  {
    name: 'id',
    label: 'Acciones',
    options: {
      // eslint-disable-next-line react/prop-types
      customBodyRender: (id) => (
        <IconButton onClick={() => alert(id)}>
          <Visibility />
        </IconButton>
      ),
    },
  },
  {
    name: 'customer',
    label: 'Cliente',
    options: {
      // eslint-disable-next-line react/prop-types
      customBodyRender: ({ displayName, photoURL }) => (
        <Box display="flex" alignItems="center">
          <Box mr={3}>
            <Avatar src={photoURL} />
          </Box>
          <Typography>{displayName}</Typography>
        </Box>
      ),
    },
  },
  {
    name: 'total',
    label: 'Total de la compra',
    options: {
      customBodyRender: (value) => `$${value.toFixed(2)}`,
    },
  },
  {
    name: 'createdAt',
    label: 'Fecha',
    options: {
      customBodyRender: (value) => new Date(value).toDateString(),
    },
  },
];

const Order = () => {
  const { orders } = useOrders();

  return (
    <ContainerResponsive>
      <h1>Pedidos del usuario</h1>
      <MUIDataTable
        title="Lista de compras"
        data={orders}
        columns={columns}
        options={{
          selectableRows: 'none',
          responsive: 'standard',
          serverSide: false,
          search: false,
          filter: false,
          rowsPerPageOptions: [],
          selectableRowsHeader: false,
        }}
      />
    </ContainerResponsive>
  );
};

export default Order;
