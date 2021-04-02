import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import useSellerProducts from '#hooks/useSellerProducts';
import ProductModal from './Modal';

const Products = ({ user }) => {
  const router = useRouter();
  const {
    query: { uid },
  } = router;
  const { products } = useSellerProducts({ uid });
  const [modal, setModal] = useState({
    open: false,
    selectedProduct: null,
  });
  const handleOpen = (selectedProduct = null) =>
    setModal({ open: true, selectedProduct });

  const handleClose = () => setModal({ open: false, selectedProduct: null });
  return (
    <>
      <ContainerResponsive>
        <Button
          component={Box}
          variant="contained"
          position="sticky"
          color="primary"
          top={80}
          zIndex={1200}
          width={125}
          alignSelf="flex-end"
          onClick={() => handleOpen()}
        >
          Agregar
        </Button>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Avatar
            src={user.photoURL}
            component={Box}
            width={120}
            height={120}
          />
          <Typography>{user.displayName}</Typography>
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
                    onClick={() => handleOpen(product)}
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
      <ProductModal data={modal} handleClose={handleClose} />
    </>
  );
};
Products.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
  }),
};
Products.defaultProps = {
  user: {},
};
export default Products;
