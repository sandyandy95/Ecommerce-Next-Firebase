import { accessControlPages } from '../security';
import VerifyAccount from '../src/screens/VerifyAccount';

const Page = () => <VerifyAccount />;

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
    props: {
      layoutProps: {
        center: true,
        disableNav: true,
      },
    },
  });
export default Page;
