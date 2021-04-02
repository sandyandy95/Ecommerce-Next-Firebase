import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import ProductModal from './Modal';
import useProducts from '#hooks/useProducts';

const Products = ({ products: _products, user }) => {
  const { deleteProductInDB } = useProducts(_products);
  const [products, setProducts] = useState(_products);

  const [modal, setModal] = useState({
    open: false,
    selectedProduct: {},
  });
  const handleOpen = (selectedProduct = {}) => {
    setModal({ open: true, selectedProduct });
  };
  const handleClose = () => setModal({ open: false, selectedProduct: {} });

  const deleteProduct = async (product) => {
    await deleteProductInDB({ ...product });
    setProducts((bef) => bef.filter((item) => item.id !== product.id));
  };
  const onSubmit = (data) => {
    setProducts((bef) => [data, ...bef]);
    handleClose();
  };

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
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Avatar src={user.photoURL} component={Box} width={120} height={120} />
          <Typography>{user.displayName}</Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
          {products.map((product) => (
            <CardProduct
              key={product.id}
              {...product}
              actions={
                <>
                  <Button variant="outlined" color="primary" onClick={() => handleOpen(product)}>
                    Editar
                  </Button>
                  <Button color="primary" onClick={() => deleteProduct(product)}>
                    Eliminar
                  </Button>
                </>
              }
            />
          ))}
        </Box>
        <ProductModal data={modal} handleClose={handleClose} onSubmit={onSubmit} />
      </ContainerResponsive>
    </>
  );
};
Products.propTypes = {
  user: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
  }),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};
Products.defaultProps = {
  user: {},
  products: [],
};
export default Products;
