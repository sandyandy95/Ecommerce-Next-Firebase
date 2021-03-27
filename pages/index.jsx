import { Button } from '@material-ui/core';
import { helloWorld } from '../src/services/functions';

const Page = () => (
  <div>
    <Button onClick={() => helloWorld()}>Test Function</Button>
  </div>
);
export default Page;
