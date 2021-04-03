import { accessControlPages } from '../security';
import SignIn from '../src/screens/SignIn';

const Page = () => <SignIn />;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    action: 'SIGNIN',
  });

export default Page;
