import { Avatar, Box, IconButton, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import MUIDataTable from 'mui-datatables';
import { useState } from 'react';
import usePastOrders from '#hooks/usePastOrders';
import OrderModal from './Modal';

const columns = ({ handleDetails }) => [
  {
    name: 'id',
    label: 'Acciones',
    options: {
      // eslint-disable-next-line react/prop-types
      customBodyRender: (id) => (
        <IconButton onClick={() => handleDetails(id)}>
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
  const { pastOrders } = usePastOrders();
  const [modal, setModal] = useState({ open: false, selectedOrder: {} });
  const handleDetails = (_id) =>
    setModal({
      open: true,
      selectedOrder: pastOrders.find(({ id }) => id === _id),
    });
  const handleClose = () => setModal({ open: false, selectedOrder: {} });

  return (
    <>
      <h1>Pedidos anteriores</h1>
      <MUIDataTable
        title="Lista de compras"
        data={pastOrders}
        columns={columns({ handleDetails })}
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
      <OrderModal handleClose={handleClose} {...modal} />
    </>
  );
};

export default Order;
