import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import CardProduct from '../../components/Card';
import ContainerResponsive from '../../components/Container';
import useSellerProducts from '../../hooks/useSellerProducts';
// import PropTypes from 'prop-types';

const Products = () => {
  const router = useRouter();
  const {
    query: { uid },
  } = router;
  const { seller, products } = useSellerProducts({ uid });
  return (
    <ContainerResponsive>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Avatar
          src={seller.photoURL}
          component={Box}
          width={120}
          height={120}
        />
        <Typography>{seller.name}</Typography>
      </Box>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {products.map((product) => (
          <CardProduct
            key={product.id}
            {...product}
            actions={
              <>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => alert(`Editar producto ${product.id}`)}
                >
                  Editar
                </Button>
                <Button
                  color="primary"
                  onClick={() => alert(`Eliminar producto ${product.id}`)}
                >
                  Eliminar
                </Button>
              </>
            }
          />
        ))}
      </Box>
    </ContainerResponsive>
  );
};
Products.propTypes = {};
Products.defaultProps = {};
export default Products;
