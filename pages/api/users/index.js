import { auth } from '../../../src/services/admin.setup';
import { accessControlApi } from '../../../security/api';
import handleError from '../utils';

const get = async (req, res) => {
  try {
    const { pageToken, usersPerPage = 100 } = req.query;
    const listUsersResult = await auth.listUsers(Number(usersPerPage), pageToken);
    const users = listUsersResult.users.map((userRecord) => {
      const { uid, email, displayName, photoURL, customClaims } = userRecord.toJSON();
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
      return accessControlApi('admin')({ req, res }, get);
    default:
      return res.status(405).json({ error: 'Método no permitido' });
  }
};

export default handler;
