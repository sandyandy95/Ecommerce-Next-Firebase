import { auth } from '../../../services/setup';
import handleError from '../utils';

const get = async (req, res) => {
  try {
    const { pageToken, usersPerPage = 100 } = req.query;
    // hablar en la tesis --> liminte de 1000 por resquest
    const listUsersResult = await auth.listUsers(
      Number(usersPerPage),
      pageToken
    );
    const users = listUsersResult.users.map((userRecord) => {
      const {
        uid,
        email,
        displayName,
        photoURL,
        customClaims,
      } = userRecord.toJSON();
      return {
        uid,
        email,
        displayName,
        photoURL,
        role: customClaims?.role,
      };
    });
    res.status(200).json({
      users,
      nextPageToken: listUsersResult.pageToken,
      message: 'Operación realizada con éxito',
    });
  } catch (err) {
    handleError(res, err);
  }
};

const handler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return get(req, res);
    default:
      return res.status(405).json({ error: 'Método no permitido' });
  }
};

export default handler;
