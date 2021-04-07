import nextCookies from 'next-cookies';
import { auth } from '#services/admin.setup';

const verifyToken = async (token) => {
  if (!token) return undefined;
  try {
    const user = await auth.verifyIdToken(token);
    return user;
  } catch (error) {
    return undefined;
  }
};

export const getUser = async (ctx) => {
  const session = nextCookies(ctx);
  const token = session?.__session?.stsTokenManager?.accessToken;
  const user = await verifyToken(token);
  return user || null;
};

export default verifyToken;
