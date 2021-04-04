import { accessControlPages } from '../security';
import Cart from '../src/screens/Cart';
import Layout from '../src/layouts/Container';

const Page = () => <Cart />;
Page.layout = Layout;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'user',
  });
export default Page;
