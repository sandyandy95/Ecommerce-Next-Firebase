import { Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import ModalContainer from '../../../components/ModalContainer';
import Input from '../../../components/Input';
import { ProductSchema } from '../../../utils/schemas';

const ProductModal = ({ data, handleClose }) => {
  const isEditting = Boolean(data.selectedProduct);

  const initialValues = data.selectedProduct || {
    name: '',
    photoURL: '',
    description: '',
    price: 0,
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: () => {
      alert(`Guardando... ${JSON.stringify(values)}`);
      handleClose();
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
};
export default ProductModal;
