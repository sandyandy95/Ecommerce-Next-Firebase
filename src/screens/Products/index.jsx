import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import PropTypes from 'prop-types';
import CardProduct from '#Components/Card';
import ProductModal from './Modal';
import useProducts from '#hooks/useProducts';

const Products = ({ products: _products, userDB }) => {
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
  const onSubmit = ({ product, isEditting }) => {
    if (isEditting) {
      const updatedProducts = products.map((item) => {
        if (item.id === product.id) {
          return { ...item, ...product };
        }
        return item;
      });
      setProducts(updatedProducts);
    } else {
      setProducts((bef) => [product, ...bef]);
    }
    handleClose();
  };

  return (
    <>
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
        <Avatar src={userDB.photoURL} component={Box} width={120} height={120} />
        <Typography>{userDB.displayName}</Typography>
      </Box>
      <Typography variant="h3" gutterBottom>
        Tus Productos
      </Typography>
      {products.length ? (
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
      ) : (
        <Typography variant="h3" align="center" color="primary">
          Agrega tus productos ahora!
        </Typography>
      )}

      <ProductModal data={modal} handleClose={handleClose} onSubmit={onSubmit} />
    </>
  );
};
Products.propTypes = {
  userDB: PropTypes.shape({
    photoURL: PropTypes.string,
    displayName: PropTypes.string,
  }),
  products: PropTypes.arrayOf(PropTypes.shape({})),
};
Products.defaultProps = {
  userDB: {},
  products: [],
};
export default Products;
