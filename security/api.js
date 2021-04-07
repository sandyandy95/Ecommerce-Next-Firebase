import { getUser } from './verifyToken';

export const hasPermissions = (role, acceslist) => acceslist.includes(role) || acceslist.includes('admin');

const unauthorized = (res) => res.status(401).json({ status: 401, message: 'No autorizado' });

export const accessControlApi = (acl = 'admin') => async (ctx, callback) => {
  const user = await getUser(ctx);
  if (!user) return unauthorized(ctx.res);
  const acceslist = typeof acl === 'string' ? [acl] : acl;
  if (user?.secret) {
    return callback(ctx.req, ctx.res, user);
  }
  if (hasPermissions(user?.role, acceslist)) {
    return callback(ctx.req, ctx.res, user);
  }
  return unauthorized(ctx.res);
};
