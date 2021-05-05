import cookies from 'js-cookie';

export const saveSession = (session) => cookies.set('__session_tesis', session);

export const clearSession = () => cookies.remove('__session_tesis');

export const getClientSession = () => {
  const session = cookies.get('__session_tesis');
  if (session === 'undefined' || session === '') return {};
  if (session) return JSON.parse(session); // --> { displayName: 'useri 1', token: '21321', ....}
  return session;
};
