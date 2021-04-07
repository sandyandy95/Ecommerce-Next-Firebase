import { accessControlPages } from '../../../security';
import Users from '../../../src/screens/Users';
import Layout from '../../../src/layouts/Container';

const Page = (props) => <Users {...props} />;

Page.layout = Layout;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    acl: 'admin',
    props: async () => {
      let data = {};
      const res = await fetch('http://localhost:3000/api/users', {
        headers: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined,
      });
      data = await res.json();
      return {
        data: JSON.parse(JSON.stringify(data)),
      };
    },
  });

export default Page;
