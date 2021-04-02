import { getProducts } from '#src/services/server/products/db';
import Home from '../src/screens/Home';

const Page = (props) => <Home {...props} />;

export const getServerSideProps = async () => {
  let products = [];
  products = await getProducts();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
};
export default Page;
