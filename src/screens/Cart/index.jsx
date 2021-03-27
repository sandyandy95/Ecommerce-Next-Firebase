import { Box, Button, Grid } from '@material-ui/core';
import CardProduct from '../../components/Card';
import ContainerResponsive from '../../components/Container';
import Resumen from './sections/Resumen';

const Cart = () => {
  const cartState = {
    subtotal: 12,
    products: [
      {
        id: '2',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'At eligendi vero.',
        photoURL:
          'https://d1ralsognjng37.cloudfront.net/3c266a5d-9a20-488d-8f9a-173c13d07397.jpeg',
        seller: {
          name: 'Lynn Hahn',
        },
      },
      {
        id: '3',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Quia fugiat consectetur dolor nemo hic deleniti.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Tracy Franecki',
        },
      },
      {
        id: '4',
        name: 'Hamburguesa Queen',
        price: 12.32,
        description: 'Dolor earum aut corrupti voluptatem nesciunt.',
        photoURL: 'http://placeimg.com/640/480/food',
        seller: {
          name: 'Meghan Carroll',
        },
      },
    ],
  };
  const subtotal = cartState.products.reduce(
    (acum, curr) => acum + curr.price,
    0
  );
  const sellers = cartState.products.reduce(
    (acum, curr) => [...acum, curr.seller],
    []
  );
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
                  onClick={() => alert(`Borrar producto ${product.id}`)}
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
