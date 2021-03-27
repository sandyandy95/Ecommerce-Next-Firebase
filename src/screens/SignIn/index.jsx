import { Button } from '@material-ui/core';
import ContainerResponsive from '../../components/Container';
import Input from '../../components/Input';

const SignIn = () => (
  <ContainerResponsive center>
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <Input label="Correo electrónico" />
      <Input label="Password" />
      <Button>Iniciar sesion</Button>
    </form>
  </ContainerResponsive>
);

export default SignIn;
