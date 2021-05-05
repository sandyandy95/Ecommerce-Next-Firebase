import { useContext } from 'react';
import SessionContext from '#src/contexts/session/context';

const useUser = () => {
  const {
    state: { user },
  } = useContext(SessionContext);

  // funciones de actualizacion de usuario fotos, informacion
  // red social --> getFriendByUserId

  return { user };
};

export default useUser;
