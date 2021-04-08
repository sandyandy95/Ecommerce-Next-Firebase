import { v4 as uuid } from 'uuid';
import { createProduct, deleteProductById, updateProduct } from '#services/client/products/db';
import { uploadFile } from '#services/utils/storage';
import useFetch from './useFetch';
import useUser from './useUser';

const useProducts = () => {
  const { fetchFunction } = useFetch();
  const { user: seller } = useUser();

  const createProductFirestore = async ({ callback, product }) => {
    const data = await fetchFunction({
      callback: () =>
        createProduct({
          product,
          seller,
        }),
      enableSnackbar: true,
    });
    if (typeof callback === 'function' && data) callback(data);
  };

  const createProductInDB = async ({ product, callback }) => {
    const photoId = uuid();
    uploadFile({
      node: 'users',
      path: `${seller.uid}/products/${photoId}`,
      file: product.photoURL,
      setProgress: (progress) => console.log(progress),
      callback: (photoURL) =>
        createProductFirestore({
          product: { ...product, photoURL, photoId },
          callback,
        }),
    });
  };

  const updateProductInDB = async ({ product, callback }) => {
    let data = {};
    if (typeof product.photoURL === 'string') {
      data = await updateProduct(product);
      if (typeof callback === 'function' && data) callback(data);
    } else {
      await uploadFile({
        node: 'users',
        path: `${seller.uid}/products/${product.photoId}`,
        file: product.photoURL,
        setProgress: (progress) => console.log(progress),
        callback: async (photoURL) => {
          data = await updateProduct({ ...product, photoURL, photoId: product.photoId });
          if (typeof callback === 'function' && data) callback(data);
        },
      });
    }
  };

  const deleteProductInDB = async ({ id, photoId }) => {
    // eslint-disable-next-line no-alert
    const resp = window.confirm('¿Estás seguro de eliminar este producto?');
    if (resp) {
      await fetchFunction({
        callback: deleteProductById({ id, photoId, uid: seller.uid }),
        enableSnackbar: true,
      });
    }
  };
  return {
    createProductInDB,
    deleteProductInDB,
    updateProductInDB,
  };
};
export default useProducts;
