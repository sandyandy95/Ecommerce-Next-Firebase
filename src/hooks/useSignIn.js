import showSigninErrors from '#src/constants/signinErrors';
import { signInWithEmail } from '#src/services/auth/email';
import {
  signInWithFacebook,
  signInWithGoogle,
} from '#src/services/auth/google';

const useSignIn = () => {
  const hadleSignIn = async (callbackSign) => {
    try {
      const { user } = await callbackSign();
      console.log(user);
    } catch (error) {
      console.log(error);
      showSigninErrors(error);
    }
  };
  const withEmail = (email, password) =>
    hadleSignIn(() => signInWithEmail(email, password));

  const withFacebook = () => hadleSignIn(signInWithFacebook);

  const withGoogle = () => hadleSignIn(signInWithGoogle);

  const signOut = () => {};

  return { signOut, withEmail, withFacebook, withGoogle };
};

export default useSignIn;
