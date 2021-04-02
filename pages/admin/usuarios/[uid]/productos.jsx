import { getProductsById } from '#src/services/server/products/db';
import Products from '../../../../src/screens/Products';

const Page = () => <Products />;

export const getServerSideProps = async (ctx) => {
  const {
    query: { uid },
  } = ctx;
  let products = [];
  if (uid) {
    products = await getProductsById(uid);
  }

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};
export default Page;
