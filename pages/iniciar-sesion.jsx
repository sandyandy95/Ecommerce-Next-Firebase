import { accessControlPages } from '../security';
import SignIn from '../src/screens/SignIn';
import Layout from '../src/layouts/Container';

const Page = () => <SignIn />;

Page.layout = Layout;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    action: 'SIGNIN',
    props: {
      layoutProps: {
        center: true,
        disableNav: true,
      },
    },
  });

export default Page;
