import { productRef } from '../../refs';
import { FieldValue } from '../../setup';
import { deleteFile } from '../../utils/storage';

export const createProduct = async ({ product, seller }) => {
  const ref = productRef().doc();
  await ref.set({
    ...product,
    createdAt: FieldValue.serverTimestamp(),
    seller,
  });
  return { id: ref.id, ...product, seller };
};

export const updateProduct = async (product) => {
  const ref = productRef().doc(product.id);
  await ref.update({
    ...product,
  });
  return { id: ref.id, ...product };
};
export const deleteProductById = async ({ uid, id, photoId }) => {
  await deleteFile(`users/${uid}/products/${photoId}`);
  await productRef().doc(id).delete();
};
