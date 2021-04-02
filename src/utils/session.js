import cookies from 'js-cookie';

export const saveSession = (session) => {
  cookies.set('__session', session);
};

export const clearSession = () => {
  cookies.remove('__session');
};

export const getClientSession = () => {
  const session = cookies.get('__session');
  if (session === 'undefined' || session === '') return {};
  if (session) return JSON.parse(session);
  return session;
};
