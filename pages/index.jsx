import Home from '../src/screens/Home';
import { getProducts } from '../services/products/db';

const Page = (props) => <Home {...props} />;

export const getServerSideProps = async (ctx) => {
  const { res } = ctx;

  try {
    const products = await getProducts();
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
