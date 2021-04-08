import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import ModalContainer from '../../../components/ModalContainer';
import Input from '../../../components/Input';
import { ProductSchema } from '../../../utils/schemas';
import InputFile from '#Components/InputFile';
import useProducts from '#hooks/useProducts';

const ProductModal = ({ data, handleClose, onSubmit }) => {
  const isEditting = Boolean(data.selectedProduct);
  const { createProductInDB, updateProductInDB } = useProducts();

  const { values, errors, handleChange, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues: data.selectedProduct,
    onSubmit: async () => {
      if (isEditting) {
        await updateProductInDB({
          product: values,
          callback: (val) => {
            onSubmit({ product: val, isEditting });
            resetForm();
          },
        });
      } else {
        await createProductInDB({
          product: values,
          callback: (val) => {
            onSubmit({ product: val, isEditting });
            resetForm();
          },
        });
      }
    },
    enableReinitialize: true,
    validationSchema: ProductSchema,
  });
  const closeModal = () => {
    handleClose();
    resetForm();
  };
  return (
    <ModalContainer
      open={data.open}
      handleClose={closeModal}
      title={`${isEditting ? 'Editar' : 'Agregar'} producto`}
      description="Agrega los detalles del producto"
      fullWidth
    >
      <Box component="form" m={3} onSubmit={handleSubmit}>
        <Input
          id="name"
          name="name"
          label="Nombre"
          value={values.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          fullWidth
        />
        <Input
          id="description"
          name="description"
          label="Descripción"
          value={values.description}
          onChange={handleChange}
          error={Boolean(errors.description)}
          helperText={errors.description}
          fullWidth
        />
        <Input
          id="price"
          name="price"
          label="Precio"
          type="number"
          value={values.price}
          onChange={handleChange}
          error={Boolean(errors.price)}
          helperText={errors.price}
          fullWidth
        />
        <InputFile id="photoURL" name="photoURL" value={values.photoURL} onChange={(value) => setFieldValue('photoURL', value)} helperText={errors.photoURL} />
        <Button variant="contained" color="secondary" type="submit">
          Guardar
        </Button>
      </Box>
    </ModalContainer>
  );
};
ProductModal.propTypes = {
  data: PropTypes.shape({
    open: PropTypes.bool,
    selectedProduct: PropTypes.shape({}),
  }),
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ProductModal.defaultProps = {
  data: {
    open: false,
    selectedProduct: {
      name: '',
      photoURL: '',
      description: '',
      price: 0,
    },
  },
};
export default ProductModal;
