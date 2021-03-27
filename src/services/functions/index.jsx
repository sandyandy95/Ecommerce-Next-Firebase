import { db } from '../setup';

export const helloWorld = async () => {
  const { docs } = await db.collection('users').get();
  const data = docs.map((item) => item.data());
  return data;
};
export const hel = '';
