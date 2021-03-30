import { Avatar, Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardProduct from '../../../components/Card';
import ModalContainer from '../../../components/ModalContainer';

const OrderModal = ({ open, selectedOrder, handleClose }) => {
  const {
    id,
    createdAt,
    customer = {},
    products = [],
    subtotal,
    total,
  } = selectedOrder;
  const description = `Compra realizada el ${new Date(
    createdAt
  ).toDateString()}`;

  return (
    <ModalContainer
      open={open}
      handleClose={handleClose}
      title={`Detalle de la orden ${id}`}
      description={description}
      fullWidth
    >
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
        <Typography>
          <b>Subtotal: </b>
          {`$${subtotal}`}
        </Typography>
        <Typography>
          <b>Total: </b>
          {`$${total}`}
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
    createdAt: PropTypes.number,
    customer: PropTypes.shape({}),
    products: PropTypes.arrayOf(PropTypes.shape({})),
    subtotal: PropTypes.number,
    total: PropTypes.number,
  }),
  handleClose: PropTypes.func.isRequired,
};
OrderModal.defaultProps = {
  selectedOrder: {},
};
export default OrderModal;
