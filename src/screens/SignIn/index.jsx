import { useContext } from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import Input from '#Components/Input';
import { LoginSchema } from '../../utils/schemas';
import SessionContext from '#src/context/session/context';

const SignIn = () => {
  const { signIn } = useContext(SessionContext);

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: () => signIn('email', values.email, values.password),
  });
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
        <Typography variant="h3" color="primary">
          Bienvenido
        </Typography>
        <Typography variant="h4" color="secondary">
          Inicia sesión
        </Typography>
        <Box component="form" display="flex" flexDirection="column" m={3} onSubmit={handleSubmit} width="50%" minWidth={280}>
          <Input
            id="email"
            name="email"
            label="Correo electrónico"
            onChange={handleChange}
            value={values.email}
            error={Boolean(errors.email)}
            helperText={errors.email}
            color="secondary"
          />
          <Input
            id="password"
            name="password"
            label="Password"
            onChange={handleChange}
            value={values.password}
            error={Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button type="submit" variant="contained" color="secondary">
            Iniciar sesion
          </Button>
        </Box>
      </Box>

      <Button fullWidth variant="contained" color="secondary" onClick={() => signIn('google')}>
        Ingresar con Google
      </Button>
      <Button fullWidth variant="contained" color="primary" onClick={() => signIn('facebook')}>
        Ingresar con Facebook
      </Button>
    </>
  );
};

export default SignIn;
