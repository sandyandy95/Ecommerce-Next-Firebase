import { calculatePrice, formatOrders } from '../../utils/formatOrder';
import handleError from '../../utils';
import transactionOrder from '../../../../src/services/server/orders';
import { accessControlApi } from '../../../../security/api';

const post = async (req, res) => {
  try {
    const { products, user: customer } = req.body;

    const price = calculatePrice(products);
    const { adminOrder, ordersBySeller } = formatOrders({ price, products, customer });
    transactionOrder({ adminOrder, ordersBySeller });
    res.status(200).json({
      message: 'Operación realizada con éxito',
    });
  } catch (err) {
    handleError(res, err);
  }
};

const handler = (req, res) => {
  switch (req.method) {
    case 'POST':
      return accessControlApi(['seller', 'admin'])({ req, res }, post);
    default:
      return res.status(405).json({ error: 'Método no permitido' });
  }
};

export default handler;
