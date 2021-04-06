import { v4 as uuid } from 'uuid';
import { db, FieldValue } from '../../admin.setup';

const transactionOrder = ({ adminOrder, ordersBySeller }) => {
  const orderId = uuid();
  const batch = db.batch();
  const createdAt = FieldValue.serverTimestamp();
  batch.set(db.collection('orders').doc(orderId), { ...adminOrder, createdAt });
  // pedidos a entregar  --> orders
  ordersBySeller.map((item) => batch.set(db.collection('users').doc(item.uid).collection('orders').doc(orderId), { ...item, createdAt }));
  batch.commit();
};

export default transactionOrder;
