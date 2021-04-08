import { Avatar, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardProduct from '../../../components/Card';
import ModalContainer from '../../../components/ModalContainer';

const OrderModal = ({ open, selectedOrder, handleClose, role }) => {
  const isSeller = role === 'seller';
  const { id = '', createdAt = {}, customer = {}, products = [], subtotal, total } = selectedOrder;
  const description = createdAt._seconds && `${isSeller ? 'Venta' : 'Compra'} realizada el ${new Date(createdAt._seconds * 1000).toDateString()}`;

  return (
    <ModalContainer open={open} handleClose={handleClose} title={`Detalle de ${isSeller ? 'tu venta' : 'la orden'} ${id.substr(0, 6)}`} fullWidth>
      <Typography align="center" variant="subtitle2" color="secondary" gutterBottom>
        {description}
      </Typography>
      <Box m={3}>
        <Box display="flex" alignItems="center" my={2}>
          <Avatar src={customer.photoURL} component={Box} mr={2} />
          <Typography>
            <b>Cliente: </b>
            {`${customer.displayName}`}
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="space-around">
          {products.map((product) => (
            <CardProduct key={product.id} minWidth {...product} />
          ))}
        </Box>
        {!isSeller && (
          <Typography>
            <b>Subtotal: </b>
            {`$${subtotal}`}
          </Typography>
        )}
        <Typography>
          <b>Total: </b>
          {`$${isSeller ? subtotal : total}`}
        </Typography>
      </Box>
    </ModalContainer>
  );
};
OrderModal.propTypes = {
  open: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  selectedOrder: PropTypes.shape({
    id: PropTypes.string,
    createdAt: PropTypes.shape({
      _seconds: PropTypes.number,
    }),
    customer: PropTypes.shape({}),
    products: PropTypes.arrayOf(PropTypes.shape({})),
    subtotal: PropTypes.number,
    total: PropTypes.number,
  }),
  handleClose: PropTypes.func.isRequired,
  role: PropTypes.string,
};
OrderModal.defaultProps = {
  selectedOrder: {
    id: '',
    createdAt: { _seconds: 0 },
  },
  role: '',
};
export default OrderModal;
