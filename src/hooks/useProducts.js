import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { createProduct, deleteProductById, updateProduct } from '#services/client/products/db';
import { uploadFile } from '#services/utils/storage';
import useFetch from './useFetch';
import useUser from './useUser';
import UIContext from '#src/context/ui/context';

const useProducts = () => {
  const { fetchFunction } = useFetch();
  const { user: seller } = useUser();
  const { showLoading, hideLoading } = useContext(UIContext);

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
    showLoading();
    try {
      const photoId = uuid();
      uploadFile({
        node: 'users',
        path: `${seller.uid}/products/${photoId}`,
        file: product.photoURL,
        setProgress: (progress) => console.log(progress),
        callback: async (photoURL) => {
          await createProductFirestore({
            product: { ...product, photoURL, photoId },
            callback,
          });
          hideLoading();
        },
      });
    } catch (error) {
      hideLoading();
    }
  };

  const updateProductInDB = async ({ product, callback }) => {
    let data = {};
    showLoading();

    try {
      if (product.photoId) {
        data = await updateProduct(product);
        if (typeof callback === 'function' && data) callback(data);
        hideLoading();
      } else {
        await uploadFile({
          node: 'users',
          path: `${seller.uid}/products/${product.photoId}`,
          file: product.photoURL,
          setProgress: (progress) => console.log(progress),
          callback: async (photoURL) => {
            data = await updateProduct({ ...product, photoURL, photoId: product.photoId });
            if (typeof callback === 'function' && data) callback(data);
            hideLoading();
          },
        });
      }
    } catch (error) {
      hideLoading();
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
