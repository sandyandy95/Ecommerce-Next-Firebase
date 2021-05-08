export const redirect = (res, target) => {
  res.writeHead(302, {
    Location: target,
  });
};
// acceslist = [ 'user, 'admin', 'seller' ]
// hasPermissions --> boolean

export const hasPermissions = (acceslist, role = '') =>
  acceslist.includes(role) || acceslist.includes('any');
