import nextCookies from 'next-cookies';
import verifyToken from './api';
import { redirect, hasPermissions } from './utils';

export const getUser = async (ctx) => {
  const cookie = nextCookies(ctx);
  // podrias en texto en tu tesis que es un access token y refresh token y como funcionan
  const token = cookie?.__session_tesis?.stsTokenManager?.accessToken;
  // descifrar la cookie
  const user = await verifyToken(token);
  return user || null;
};

// eslint-disable-next-line consistent-return
const redirectUserHome = (res, user) => {
  if (user && !user?.role) {
    // user.role ? user.role : null
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
  if (user?.role === 'user') {
    redirect(res, '/');
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

export const accessControlPages = async ({
  ctx,
  action = 'NAVIGATION',
  acl = 'any', // "user" || ['admin', 'seller']
  callbackProps = {},
}) => {
  const user = await getUser(ctx);
  const { res, req } = ctx;
  const acceslist = typeof acl === 'string' ? [acl] : acl;
  if (action === 'SIGNIN') {
    if (redirectIfAuthenticated({ res, req, user })) {
      return res.end();
    }
  }
  if (action === 'NAVIGATION') {
    if (redirectIfNotAuthenticated({ res, req, user, acceslist })) {
      return res.end();
    }
  }
  let _props = [];
  if (typeof callbackProps === 'function') {
    _props = await callbackProps(ctx);
  } else {
    _props = callbackProps;
  }
  return { props: { ..._props, user } };
};
