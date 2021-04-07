import { accessControlPages } from '../../../security';
import { getUserById } from '../../../src/services/server/user/db';
import { getPurchasesByCustomerId } from '../../../src/services/server/orders';
import Purchases from '../../../src/screens/Purchases';

const Page = (props) => <Purchases {...props} />;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'user',
    props: async () => {
      const {
        query: { uid },
        res,
      } = ctx;
      if (!uid) {
        res.statusCode = 302;
        res.setHeader('Location', '/404');
      }
      try {
        await getUserById(uid);
        const orders = await getPurchasesByCustomerId(uid);
        return {
          orders: JSON.parse(JSON.stringify(orders)),
        };
      } catch (error) {
        res.statusCode = 302;
        return res.setHeader('Location', '/404');
      }
    },
  });
export default Page;
