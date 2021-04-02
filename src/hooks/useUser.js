import { useContext } from 'react';
import SessionContext from '#src/context/session/context';

const useUser = () => {
  const {
    state: { user },
  } = useContext(SessionContext);

  return { user };
};

export default useUser;
