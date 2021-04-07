import nextcookies from 'next-cookies';
import { accessControlPages } from '../../../security';
import Orders from '../../../src/screens/Orders';
import { getOrdersBySellerId } from '../../../src/services/server/orders';
import { getUserById } from '../../../src/services/server/user/db';

const Page = (props) => <Orders {...props} />;
export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'seller',
    props: async () => {
      const {
        query: { uid },
        res,
      } = ctx;
      const { uid: _uid } = nextcookies(ctx).__session || {};
      if (!uid || uid !== _uid) {
        res.statusCode = 302;
        res.setHeader('Location', '/404');
      }
      try {
        await getUserById(uid);
        const orders = await getOrdersBySellerId(uid);
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
