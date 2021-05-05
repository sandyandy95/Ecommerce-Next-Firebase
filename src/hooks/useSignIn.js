import { useRouter } from 'next/router';
import { clearSession, saveSession } from '#src/utils/session';
import { logout, signInWithEmail } from '#src/services/auth/email';
import {
  signInWithFacebook,
  signInWithGoogle,
} from '#src/services/auth/google';
import getUserById from '#src/services/users/db';

const useSignIn = () => {
  const router = useRouter();
  const hadleSignIn = async (callbackSign) => {
    try {
      const { user: session } = await callbackSign();
      saveSession(session);
      const user = await getUserById(session);
      return { user, session };
    } catch (error) {
      return { error };
    }
  };
  const withEmail = (email, password) =>
    hadleSignIn(() => signInWithEmail(email, password));

  const withFacebook = () => hadleSignIn(signInWithFacebook);

  const withGoogle = () => hadleSignIn(signInWithGoogle);

  const signOut = async () => {
    try {
      await logout();
      clearSession();
      return router.replace('/iniciar-sesion');
    } catch (error) {
      return error;
    }
  };

  return { signOut, withEmail, withFacebook, withGoogle };
};

export default useSignIn;
