const showSigninErrors = (error) => {
  const { code = 'default' } = error;

  switch (code) {
    case 'auth/user-not-found':
      alert('Usuario no registrado');
      break;

    default:
      alert('Ocurrio error');

      break;
  }
};

export default showSigninErrors;
