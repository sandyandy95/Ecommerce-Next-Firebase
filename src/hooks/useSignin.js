import { useContext } from 'react';
import { useRouter } from 'next/router';
import { clearSession, saveSession } from '../utils/session';
import { logout, sendEmailVerification, signInWithEmail, signInWithFacebook, signInWithGoogle } from '#services/auth';
import getUserById from '#src/services/client/user/db';
import getCurrentUser from '#src/services/auth/account';
import UIContext from '#src/context/ui/context';

const useSignIn = () => {
  const router = useRouter();
  const { showLoading, hideLoading } = useContext(UIContext);
  const sendEmailVErification = async () => {
    const user = getCurrentUser();
    showLoading();
    if (user) {
      await sendEmailVerification(user);
      hideLoading();
      return alert(`Correo enviado a: ${user.email}`);
    }
    hideLoading();
    return alert('Intenta más tarde');
  };
  const handleSignIn = async (signinFn) => {
    showLoading();
    try {
      const { user: session } = await signinFn();
      saveSession(session);
      const user = await getUserById(session);
      hideLoading();
      return { user, session };
    } catch (error) {
      hideLoading();
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
    showLoading();
    try {
      clearSession();
      await logout();
      hideLoading();
      return router.replace('/iniciar-sesion');
    } catch (error) {
      hideLoading();
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
