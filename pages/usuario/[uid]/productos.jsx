import { getUserById } from '../../../services/users/db';
import { getProductsById } from '../../../services/products/db';
import Products from '../../../src/screens/Products';

const Page = (props) => <Products {...props} />;

export const getServerSideProps = async (ctx) => {
  const { res, query } = ctx;
  const { uid } = query;

  try {
    await getUserById(uid);
    const products = await getProductsById(uid);
    return {
      props: {
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    res.statusCode = 302;
    res.setHeader('Location', '/404');
    return true;
  }
};

export default Page;
