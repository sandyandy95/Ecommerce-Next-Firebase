import nextCookies from 'next-cookies';
import verifyToken from './api';
import { redirect, hasPermissions } from './utils';

export const getUser = async (ctx) => {
  const session = nextCookies(ctx);
  const token = session?.__session?.stsTokenManager?.accessToken;
  const user = await verifyToken(token);
  return user || null;
};

// eslint-disable-next-line consistent-return
const redirectUserHome = (res, user) => {
  if (user && !user?.role) {
    redirect(res, process.env.REDIRECT_NO_VERIFY);
    return true;
  }
  if (user?.role === 'admin') {
    redirect(res, process.env.REDIRECT_ADMIN);
    return true;
  }
  if (user?.role === 'seller') {
    redirect(res, process.env.REDIRECT_SELLER);
    return true;
  }
};
const redirectIfNotAuthenticated = ({ res, user, acceslist }) => {
  if (!user) {
    redirect(res, process.env.REDIRECT_IF_NOT_AUTHENTICATED);
    return true;
  }
  if (!hasPermissions(acceslist, user?.role)) {
    redirectUserHome(res, user);

    redirect(res, process.env.REDIRECT_IF_NO_ACCESS);
    return true;
  }
  return false;
};

const redirectIfAuthenticated = ({ res, user }) => {
  redirectUserHome(res, user);
  if (user) {
    redirect(res, process.env.REDIRECT_IF_AUTHENTICATED);
    return true;
  }
  return false;
};

export const accessControlPages = async ({ ctx, action = 'NAVIGATION', acl = 'any', props = {} }) => {
  const user = await getUser(ctx);
  const { res, req } = ctx;
  const acceslist = typeof acl === 'string' ? [acl] : acl;
  if (action === 'SIGNIN') {
    if (redirectIfAuthenticated({ res, req, user })) {
      return { props: {} };
    }
  }
  if (action === 'NAVIGATION') {
    if (redirectIfNotAuthenticated({ res, req, user, acceslist })) {
      return { props: {} };
    }
  }
  let _props = [];
  if (typeof props === 'function') {
    _props = await props(ctx);
  } else {
    _props = props;
  }
  return { props: { ..._props, user } };
};
