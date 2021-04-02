import { productRef } from '../../ref.admin';

export const getProducts = async () => {
  const { docs } = await productRef().get();
  const data = docs.map((item) => ({ ...item.data(), id: item.id }));
  return data;
};
export const getProductsById = async (uid) => {
  const { docs } = await productRef().where('seller.uid', '==', uid).get();
  const data = docs.map((item) => ({ ...item.data(), id: item.id }));
  return data;
};
