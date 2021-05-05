import { Box, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import useCart from '#hooks/useCart';
import useUser from '#hooks/useUser';

const Home = ({ products }) => {
  const { user } = useUser();
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
Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Home;
