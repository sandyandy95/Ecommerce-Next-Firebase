import { Avatar, Box, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import ModalContainer from '../../../components/ModalContainer';
import Input from '../../../components/Input';
import { UserSchema } from '#src/utils/schemas';
import Selector from '#Components/Selector';
import { OPTIONS_ROLES } from '#src/utils/constants';

const EditModal = ({ data, handleClose, onSubmit }) => {
  const isEditting = Boolean(data.selectedUser);

  const { values, errors, handleChange, handleSubmit, setFieldValue, resetForm } = useFormik({
    initialValues: data.selectedUser,
    onSubmit: () => onSubmit(values),
    enableReinitialize: true,
    validationSchema: UserSchema,
  });
  const closeModal = () => {
    handleClose();
    resetForm();
  };
  return (
    <ModalContainer
      open={data.open}
      handleClose={closeModal}
      title={`${isEditting ? 'Editar' : 'Agregar'} usuario`}
      description="Agrega los detalles del usuario"
      fullWidth
    >
      <Box component="form" m={3} onSubmit={handleSubmit}>
        <Box display="flex" justifyContent="center" m={3}>
          <Avatar src={values.photoURL} alt="photo-user" />
        </Box>
        <Input
          id="displayName"
          name="displayName"
          label="Nombre"
          value={values.displayName}
          onChange={handleChange}
          error={Boolean(errors.displayName)}
          helperText={errors.displayName}
          fullWidth
        />
        <Input id="email" name="email" label="Descripción" value={values.email} onChange={handleChange} fullWidth disabled />
        <Selector options={OPTIONS_ROLES} value={values.role} onChange={(value) => setFieldValue('role', value)} helperText={errors.role} />
        <Button variant="contained" color="secondary" type="submit">
          Guardar
        </Button>
      </Box>
    </ModalContainer>
  );
};
EditModal.propTypes = {
  data: PropTypes.shape({
    open: PropTypes.bool,
    selectedUser: PropTypes.shape({}),
  }),
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

EditModal.defaultProps = {
  data: {
    open: false,
    selectedUser: {
      displayName: '',
      photoURL: '',
      role: '',
      email: '',
    },
  },
};
export default EditModal;
