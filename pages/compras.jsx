import { Typography } from '@material-ui/core';
import { accessControlPages } from '../security';

const Page = () => (
  <div>
    <Typography variant="h1">Compras</Typography>
  </div>
);

export const getServerSideProps = (ctx) =>
  accessControlPages({
    ctx,
  });
export default Page;
