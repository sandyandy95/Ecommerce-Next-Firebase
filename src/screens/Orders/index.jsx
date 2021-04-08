import { Avatar, Box, IconButton, Typography } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import MUIDataTable from 'mui-datatables';
import { useState } from 'react';
import PropTypes from 'prop-types';
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
    name: 'subtotal',
    label: 'Total de la venta',
    options: {
      customBodyRender: (value) => `$${value.toFixed(2)}`,
    },
  },
  {
    name: 'createdAt',
    label: 'Fecha',
    options: {
      customBodyRender: ({ _seconds }) => new Date(_seconds * 1000).toDateString(),
    },
  },
];

const Order = ({ orders, user }) => {
  const [modal, setModal] = useState({ open: false, selectedOrder: {} });
  const handleDetails = (_id) =>
    setModal({
      open: true,
      selectedOrder: orders.find(({ id }) => id === _id),
    });
  const handleClose = () => setModal({ open: false, selectedOrder: {} });

  return (
    <>
      <Typography gutterBottom variant="h3">
        Pedidos por entregar
      </Typography>
      <MUIDataTable
        title="Lista de compras"
        data={orders}
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
      <OrderModal handleClose={handleClose} {...modal} {...user} />
    </>
  );
};
Order.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape()),
  user: PropTypes.shape(),
};
Order.defaultProps = {
  orders: [],
  user: {},
};
export default Order;
