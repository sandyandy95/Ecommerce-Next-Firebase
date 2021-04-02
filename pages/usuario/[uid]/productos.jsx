import { getUserById } from '../../../src/services/server/user/db';
import Products from '../../../src/screens/Products';

const Page = (props) => <Products {...props} />;

export const getServerSideProps = async (ctx) => {
  const {
    query: { uid },
    res,
  } = ctx;

  if (!uid) {
    res.statusCode = 302;
    res.setHeader('Location', '/404');
  }
  try {
    const user = await getUserById(uid);

    return {
      props: { user: JSON.parse(JSON.stringify(user)) },
    };
  } catch (error) {
    res.statusCode = 302;
    return res.setHeader('Location', '/404');
  }
};
export default Page;
