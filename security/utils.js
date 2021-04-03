export const redirect = (res, target) => {
  res.writeHead(302, {
    Location: target,
  });
  res.end();
};

export const hasPermissions = (acceslist, role = '') => acceslist.includes(role) || acceslist.includes('any');
