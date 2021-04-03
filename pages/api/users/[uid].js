import { auth } from '../../../src/services/admin.setup';
import handleError from '../utils';

const put = async (req, res) => {
  try {
    const { uid } = req.query;
    const { displayName, email, role } = req.body;
    if (!displayName || !email || !role) {
      return res.status(400).send({ status: 400, message: 'Campos faltantes' });
    }
    const updatedUser = {
      displayName,
      email,
      emailVerified: true,
      customClaims: { role },
    };
    await auth.updateUser(uid, updatedUser);
    await auth.setCustomUserClaims(uid, { role });
    return res.status(200).send({
      status: 200,
      message: 'Usuario actualizado con éxito',
    });
  } catch (err) {
    return handleError(res, err);
  }
};

const handler = (req, res) => {
  switch (req.method) {
    case 'PUT':
      return put(req, res);
    default:
      return res.status(405).json({ error: 'Método no permitido' });
  }
};

export default handler;
