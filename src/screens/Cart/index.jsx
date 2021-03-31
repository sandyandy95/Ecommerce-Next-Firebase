import { Box, Button, Grid } from '@material-ui/core';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import useCart from '#hooks/useCart';
import Resumen from './sections/Resumen';

const Cart = () => {
  const { cartState, subtotal, sellers, removeProduct } = useCart();
  const onBuy = () => {
    alert('Implementar la compra');
  };

  return (
    <ContainerResponsive>
      <h1>Carrito</h1>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={8}
          component={Box}
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
        >
          {cartState.products.map((product) => (
            <CardProduct
              key={product.id}
              {...product}
              actions={
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeProduct(product.id)}
                >
                  Quitar
                </Button>
              }
            />
          ))}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Resumen
            sellers={sellers}
            totalProducts={cartState.products.length}
            subtotal={subtotal}
            onBuy={onBuy}
          />
        </Grid>
      </Grid>
    </ContainerResponsive>
  );
};

export default Cart;
