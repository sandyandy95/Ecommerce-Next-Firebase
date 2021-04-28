import PropTypes from 'prop-types';
import { Avatar, Box, Button, Typography } from '@material-ui/core';
import { useState } from 'react';
import CardProduct from '#Components/Card';
import ContainerResponsive from '#Components/Container';
import useProducts from '#hooks/useProducts';
import useUser from '#hooks/useUser';
import ProductModal from './Modal';

const Products = ({ products: _products }) => {
  const {
    deleteProductInDB,
    createProductInDB,
    updateProductInDB,
  } = useProducts(_products);
  const [products, setProducts] = useState(_products);
  const { user: seller } = useUser();
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

  const onSubmit = async (product) => {
    if (Object.keys(modal.selectedProduct).length) {
      const productUpdated = await updateProductInDB(product);
      const _productsUpdated = products.map((item) => {
        if (item.id === productUpdated.id) {
          return { ...productUpdated };
        }
        return item;
      });
      setProducts(_productsUpdated);
      handleClose();
    } else {
      await createProductInDB({
        product,
        callback: (_response) => {
          setProducts((bef) => [_response, ...bef]);
          handleClose();
        },
      });
    }
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
          <Typography>{seller.displayName}</Typography>
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
                    onClick={() => deleteProduct(product)}
                  >
                    Eliminar
                  </Button>
                </>
              }
            />
          ))}
        </Box>
      </ContainerResponsive>
      <ProductModal
        data={modal}
        handleClose={handleClose}
        onSubmit={onSubmit}
      />
    </>
  );
};
Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};
Products.defaultProps = {
  products: [],
};
export default Products;
