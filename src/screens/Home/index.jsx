import { Box, Typography } from '@material-ui/core';
import CardProduct from '../../components/Card';
import ContainerResponsive from '../../components/Container';
import useProducts from '../../hooks/useProducts';
import useUser from '../../hooks/useUser';

const Home = () => {
  const { user } = useUser();
  const { products } = useProducts();
  return (
    <ContainerResponsive>
      <Typography>{`Bienvenido, ${user.displayName}`}</Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => (
          <CardProduct key={product.id} {...product} />
        ))}
      </Box>
    </ContainerResponsive>
  );
};

export default Home;
