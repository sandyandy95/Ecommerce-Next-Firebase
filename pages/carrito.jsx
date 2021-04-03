import { accessControlPages } from '../security';
import Cart from '../src/screens/Cart';

const Page = () => <Cart />;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'user',
  });
export default Page;
