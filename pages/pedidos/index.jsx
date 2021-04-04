import { accessControlPages } from '../../security';
import Orders from '../../src/screens/Orders';

const Page = () => <Orders />;
export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'seller',
  });
export default Page;
