import { accessControlPages } from '../../security';
import Orders from '../../src/screens/Orders';
import { getOrders } from '../../src/services/server/orders';

const Page = (props) => <Orders {...props} />;
export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'admin',
    props: async () => {
      const { res } = ctx;

      try {
        const orders = await getOrders();
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
