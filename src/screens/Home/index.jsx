import { Box, Button, Typography } from '@material-ui/core';
import CardProduct from '../../components/Card';
import ContainerResponsive from '../../components/Container';
import NextLink from '../../components/NextLink';
import useProducts from '../../hooks/useProducts';
import useUser from '../../hooks/useUser';

const Home = () => {
  const { user } = useUser();
  const { products } = useProducts();

  return (
    <ContainerResponsive>
      <h1>Home</h1>

      <Typography>{`Bienvenido, ${user.displayName}`}</Typography>
      <NextLink href="/carrito">
        <Button fullWidth={false}>Ver Carrito</Button>
      </NextLink>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            {...product}
            actions={
              <>
                <Button
                  variant="outlined"
                  onClick={() => alert(`Producto a la cesta ${product.id}`)}
                >
                  Comprar
                </Button>
                <Button
                  onClick={() => alert(`Detalles del producto ${product.id}`)}
                >
                  Ver más
                </Button>
              </>
            }
          />
        ))}
      </Box>
    </ContainerResponsive>
  );
};

export default Home;
