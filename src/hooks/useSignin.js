import { useRouter } from 'next/router';
import { clearSession, saveSession } from '../utils/session';
import { logout, sendEmailVerification, signInWithEmail, signInWithFacebook, signInWithGoogle } from '#services/auth';
import getUserById from '#src/services/client/user/db';
import getCurrentUser from '#src/services/auth/account';

const useSignIn = () => {
  const router = useRouter();
  const sendEmailVErification = async () => {
    const user = getCurrentUser();
    if (user) {
      await sendEmailVerification(user);
      return alert(`Correo enviado a: ${user.email}`);
    }
    return alert('Intenta más tarde');
  };
  const handleSignIn = async (signinFn) => {
    try {
      const { user: session } = await signinFn();
      saveSession(session);
      const user = await getUserById(session);
      return { user, session };
    } catch (error) {
      if (error.message === 'Email no verificado') {
        const res = window.confirm('¿Enviar nuevamente el correo de verificación?');
        if (res) {
          sendEmailVErification();
        }
        return { error: '' };
      }
      return { error };
    }
  };

  const withGoogle = () => handleSignIn(signInWithGoogle);

  const withFacebook = () => handleSignIn(signInWithFacebook);

  const withEmail = (email, password) => handleSignIn(() => signInWithEmail(email, password));

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
