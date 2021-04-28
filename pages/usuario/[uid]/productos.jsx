import { getProductsById } from '../../../services/products/db';
import Products from '../../../src/screens/Products';

const Page = (props) => <Products {...props} />;

export const getServerSideProps = async (ctx) => {
  const uid = '44717de7-1053-46b2-bcfe-b6315b615cba';
  try {
    const products = await getProductsById(uid);
    if (products.length === 0) {
      throw new Error('Usuario no existe');
    }
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    const { res } = ctx;
    res.statusCode = 302;
    return res.setHeader('Location', '/404');
  }
};

export default Page;
