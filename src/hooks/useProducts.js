import { useState } from 'react';
import useFetch from '#hooks/useFetch';
import useUser from '#hooks/useUser';
import { createProduct, deleteProductById } from '#services/products/db';
import { uploadFile } from '#services/storage';

const useProducts = () => {
  const { fetchFunction } = useFetch();
  const { user: seller } = useUser();
  const [products] = useState([]);

  const createProductInDB = async ({ callback, product }) => {
    const photoId = new Date().getTime();
    const data = await fetchFunction({
      callback: async () => {
        const photoURL = await uploadFile({ file: product.photoURL, node: 'users', path: `${seller.uid}/products/${photoId}` });
        const _product = {
          ...product,
          photoURL,
          photoId,
          seller,
        };

        await createProduct({ product: { ...product,
          photoURL,
          photoId,
        },
        seller,
        });
        return _product;
      },
    });
    if (typeof callback === 'function') callback(data);
    return data;
  };

  const deleteProductInDB = async ({ id, photoId }) => {
    // eslint-disable-next-line no-alert
    const resp = window.confirm('¿Estás seguro de eliminar este producto?');
    if (resp) {
      await fetchFunction({
        callback: deleteProductById({ id, photoId, uid: seller.uid }),
      });
    }
  };
  return { products, createProductInDB, deleteProductInDB };
};
export default useProducts;
