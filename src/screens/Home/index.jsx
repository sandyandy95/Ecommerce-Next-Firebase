import { Box, Button, Typography } from '@material-ui/core';
import CardProduct from '../../components/Card';
import ContainerResponsive from '../../components/Container';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import useUser from '../../hooks/useUser';

const Home = () => {
  const { user } = useUser();
  const { products } = useProducts();
  const { addProduct } = useCart();
  return (
    <ContainerResponsive>
      <h1>Home</h1>
      <Typography>{`Bienvenido, ${user.displayName}`}</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            {...product}
            actions={
              <>
                <Button
                  variant="outlined"
                  onClick={() => addProduct(product.id)}
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
