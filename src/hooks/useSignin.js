import { useRouter } from 'next/router';
import { clearSession, saveSession } from '../utils/session';
import {
  logout,
  signInWithEmail,
  signInWithFacebook,
  signInWithGoogle,
} from '#services/auth';
import getUserById from '#src/services/client/user/db';

const useSignIn = () => {
  const router = useRouter();

  const handleSignIn = async (signinFn) => {
    try {
      const { user: session } = await signinFn();
      saveSession(session);
      const user = await getUserById(session);
      return { user, session };
    } catch (error) {
      return { error };
    }
  };

  const withGoogle = () => handleSignIn(signInWithGoogle);

  const withFacebook = () => handleSignIn(signInWithFacebook);

  const withEmail = (email, password) =>
    handleSignIn(() => signInWithEmail(email, password));

  const signOut = async () => {
    try {
      clearSession();
      await logout();
      return router.replace('/iniciar-sesion');
    } catch (error) {
      return error;
    }
  };

  return {
    signOut,
    withGoogle,
    withFacebook,
    withEmail,
  };
};

export default useSignIn;
