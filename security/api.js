import { auth } from '../services/setup';

const verifyToken = async (token) => {
  if (!token) return undefined;
  try {
    const user = await auth.verifyIdToken(token);
    return user;
  } catch (error) {
    return undefined;
  }
};

export default verifyToken;
