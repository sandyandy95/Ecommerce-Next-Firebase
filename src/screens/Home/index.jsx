import { Box, Button, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import useCart from '#hooks/useCart';
import useUser from '#hooks/useUser';

const Home = ({ products }) => {
  const { user } = useUser();
  const { addProduct, removeProduct, products: cartProducts } = useCart();
  // const onClickProduct = (product) => {
  //   const existInCart = cartProducts.some((item) => item.id === product.id);
  //   if (existInCart) {
  //     return alert('producto ya agregado');
  //   }
  //   return addProduct(product);
  // };
  const onClickProduct = (existProduct, product) => {
    if (existProduct) {
      removeProduct(product.id);
    } else {
      addProduct(product);
    }
  };

  return (
    <ContainerResponsive>
      <h1>Home</h1>
      <Typography>{`Bienvenido, ${user.displayName}`}</Typography>

      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => {
          const existProduct = cartProducts.some(
            (item) => item.id === product.id
          );
          return (
            <CardProduct
              key={product.id}
              {...product}
              actions={
                <>
                  <Button
                    variant="outlined"
                    onClick={() => onClickProduct(existProduct, product)}
                  >
                    {existProduct ? 'Eliminar' : 'Comprar'}
                  </Button>
                  <Button
                    onClick={() => alert(`Detalles del producto ${product.id}`)}
                  >
                    Ver más
                  </Button>
                </>
              }
            />
          );
        })}
      </Box>
    </ContainerResponsive>
  );
};
Home.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default Home;
