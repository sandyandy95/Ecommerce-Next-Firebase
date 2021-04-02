import { Box, Button, Grid, Typography } from '@material-ui/core';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import useCart from '#hooks/useCart';
import Resumen from './sections/Resumen';

const Cart = () => {
  const { products, subtotal, sellers, removeProduct } = useCart();
  const existProducts = Boolean(products.length);
  const onBuy = () => {
    alert('Implementar la compra');
  };

  return (
    <ContainerResponsive center={!existProducts}>
      <h1>Carrito</h1>
      {existProducts ? (
        <Grid container>
          <Grid item xs={12} sm={8} component={Box} display="flex" flexWrap="wrap" justifyContent="space-evenly">
            {products.map((product) => (
              <CardProduct
                key={product.id}
                {...product}
                actions={
                  <Button variant="outlined" color="secondary" onClick={() => removeProduct(product.id)}>
                    Quitar
                  </Button>
                }
              />
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Resumen
              sellers={sellers}
              totalProducts={products.length}
              subtotal={subtotal}
              onBuy={onBuy}
            />
          </Grid>
        </Grid>
      ) : (
        <Typography>Carrito vacío</Typography>
      )}
    </ContainerResponsive>
  );
};

export default Cart;
