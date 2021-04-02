import { db } from './admin.setup';

const nodes = {
  products: 'products',
};

export const productRef = () => db.collection(nodes.products);
export const productByIdRef = (id) => db.collection(nodes.products).doc(id);
