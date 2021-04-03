import { accessControlPages } from '../security';
import { getProducts } from '#src/services/server/products/db';
import Home from '../src/screens/Home';

const Page = (props) => <Home {...props} />;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'user',
    props: async () => {
      let products = [];
      products = await getProducts();
      return {
        products: JSON.parse(JSON.stringify(products)),
      };
    },
  });

export default Page;
