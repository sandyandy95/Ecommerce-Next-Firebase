import PastOrders from '../../src/screens/PastOrders';
import { accessControlPages } from '../../security';

const Page = () => <PastOrders />;
export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'seller',
  });
export default Page;
