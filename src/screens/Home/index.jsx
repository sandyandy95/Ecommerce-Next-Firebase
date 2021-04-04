import { Box, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardProduct from '#Components/Card';
import useCart from '#hooks/useCart';
import useUser from '#hooks/useUser';

const Home = ({ products }) => {
  const { user } = useUser();
  const { addProduct } = useCart();
  return (
    <>
      <h1>Home</h1>
      <Typography>{`Bienvenido, ${user.displayName}`}</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            {...product}
            actions={
              <Button variant="outlined" onClick={() => addProduct(product)}>
                Comprar
              </Button>
            }
          />
        ))}
      </Box>
    </>
  );
};
Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Home;
