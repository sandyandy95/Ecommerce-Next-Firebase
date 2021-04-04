import { accessControlPages } from '../security';
import { getProducts } from '#src/services/server/products/db';
import Home from '../src/screens/Home';
import Layout from '../src/layouts/Container';

const Page = (props) => <Home {...props} />;

Page.layout = Layout;

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
