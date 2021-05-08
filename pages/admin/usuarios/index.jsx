import Users from '../../../src/screens/Users';

const Page = (props) => <Users {...props} />;
export const getServerSideProps = async (ctx) => {
  const { res } = ctx;
  try {
    let data = {};
    const response = await fetch('http://localhost:3001/api/users');
    data = await response.json();
    return {
      props: {
        data: JSON.parse(JSON.stringify(data)),
      },
    };
  } catch (error) {
    res.statusCode = 302;
    res.setHeader('Location', '/404');
    return true;
  }
};

export default Page;
