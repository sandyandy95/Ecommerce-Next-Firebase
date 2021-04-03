import * as Yup from 'yup';

const stringRequired = (msj = 'Campo requerido') => Yup.string().required(msj);

export const LoginSchema = Yup.object().shape({
  email: stringRequired('Ingresa tu correo electrónico').email('El correo electrónico no es válido'),
  password: stringRequired('Ingresa tu contraseña'),
});

export const ProductSchema = Yup.object().shape({
  name: stringRequired('Nombre del producto requerido'),
  photoURL: stringRequired('Imagen requerida'),
  description: stringRequired('Descripción requerida'),
  price: Yup.number().required('Precio requerido').min(0.1, 'Debes ingresar un precio válido'),
});

export const UserSchema = Yup.object().shape({
  displayName: stringRequired('Nombre del usuario requerido'),
  role: stringRequired('Rol requerido'),
});
