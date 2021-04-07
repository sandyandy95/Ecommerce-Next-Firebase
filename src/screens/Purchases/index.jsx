import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';
import MUIDataTable from 'mui-datatables';
import { useState } from 'react';
import OrderModal from '../PastOrders/Modal';

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
    name: 'products',
    label: 'Total de productos',
    options: {
      // eslint-disable-next-line react/prop-types
      customBodyRender: (value) => value.length,
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
      customBodyRender: ({ _seconds }) => new Date(_seconds * 1000).toDateString(),
    },
  },
];
const Purchases = ({ orders }) => {
  const [modal, setModal] = useState({ open: false, selectedOrder: {} });
  const handleDetails = (_id) =>
    setModal({
      open: true,
      selectedOrder: orders.find(({ id }) => id === _id),
    });
  const handleClose = () => setModal({ open: false, selectedOrder: {} });
  return (
    <>
      <h1>Tus compras</h1>
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
      <OrderModal handleClose={handleClose} {...modal} />
    </>
  );
};
Purchases.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.shape()),
};
Purchases.defaultProps = {
  orders: [],
};
export default Purchases;
