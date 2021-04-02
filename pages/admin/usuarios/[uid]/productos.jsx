import { getUserById } from '../../../../src/services/server/user/db';
import { getProductsById } from '#src/services/server/products/db';
import Products from '../../../../src/screens/Products';

const Page = () => <Products />;

export const getServerSideProps = async (ctx) => {
  const {
    query: { uid },
    res,
  } = ctx;

  if (!uid) {
    res.statusCode = 302;
    res.setHeader('Location', '/404');
  }
  try {
    const user = await getUserById(uid);
    const products = await getProductsById(uid);

    return {
      props: {
        user: JSON.parse(JSON.stringify(user)),
        products: JSON.parse(JSON.stringify(products)),
      },
    };
  } catch (error) {
    res.statusCode = 302;
    return res.setHeader('Location', '/404');
  }
};

export default Page;
