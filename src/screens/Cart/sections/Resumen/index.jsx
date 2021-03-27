import { Box, Button, Divider, Tooltip, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const Resumen = ({ subtotal, sellers, totalProducts, onBuy }) => {
  const IVA = 0.12;
  const total = subtotal * (1 + IVA);
  const sellersNames = sellers.reduce(
    (acum, curr) => `${acum ? `${acum} - ` : ''} ${curr.name}`,
    ''
  );
  const deliveryDate = new Date().toDateString();
  return (
    <Box component="section" p={4} position="sticky" top="10px">
      <Typography gutterBottom variant="h5">
        <b>Resumen de la compra</b>
      </Typography>
      <Typography>{`De ${sellersNames}`}</Typography>
      <Typography>{`Fecha de entrega estimada ${deliveryDate}`}</Typography>
      <Divider />
      <Typography>{`Subtotal ${totalProducts} • articulos`}</Typography>
      <Tooltip title="Tomamos en cuenta el costo del servicio, IVA y transporte">
        <Typography>Tarifas</Typography>
      </Tooltip>
      <Box display="flex" justifyContent="space-between">
        <Typography>Subtotal</Typography>
        <Typography>{subtotal}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6">{total}</Typography>
      </Box>
      <Button variant="contained" color="primary" fullWidth onClick={onBuy}>
        Comprar
      </Button>
    </Box>
  );
};

Resumen.propTypes = {
  subtotal: PropTypes.number,
  sellers: PropTypes.arrayOf(PropTypes.shape()),
  totalProducts: PropTypes.number,
  onBuy: PropTypes.func.isRequired,
};

Resumen.defaultProps = {
  subtotal: 0,
  sellers: [],
  totalProducts: 0,
};
export default Resumen;
