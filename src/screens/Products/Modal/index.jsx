import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import ModalContainer from '../../../components/ModalContainer';
import Input from '../../../components/Input';
import InputFile from '../../../components/InputFile';
import { ProductSchema } from '../../../utils/schemas';

const ProductModal = ({ data, handleClose, onSubmit }) => {
  const isEditting = Object.keys(data.selectedProduct).length > 0;

  const initialValues = isEditting ? data.selectedProduct : {
    name: '',
    photoURL: '',
    description: '',
    price: 0,
  };

  const { values, errors, handleChange, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues,
    onSubmit: async () => {
      await onSubmit(values);
      resetForm();
    },
    enableReinitialize: true,
    validationSchema: ProductSchema,
  });

  return (
    <ModalContainer
      open={data.open}
      handleClose={handleClose}
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
        <InputFile
          value={values.photoURL}
          onChange={(value) => setFieldValue('photoURL', value)}
          helperText={errors.photoURL}
        />
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
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default ProductModal;
