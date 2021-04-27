import { db } from '../setup';

const productsRef = db.collection('/products');

export const getProducts = async () => {
  const { docs } = await productsRef.get();
  // docs =[  {.....data:{}...}, {.....data:{}...}, {.....data:{}...} ]
  // item.data() = {name: "p1", price: 3}
  // {item.data(), id} === {{name: "p1", price: 3}, id: 2}
  // {...item.data(), id} === {name: "p1", price: 3, id: 2}
  return docs.map((item) => ({ ...item.data(), id: item.id }));
};

export const getProductsById = async (uid) => {
  const { docs } = await productsRef.where('seller.uid', '==', uid).get();
  // [{city: Guayaquil , details: { productName: "Ricardo", age: 12 }},
  // {city: Quito ,details: { productName: "Sandy", age: 12 }}
  // formato --> Cambiarle productName a name
  return docs.map((item) => ({ ...item.data(), id: item.id }));
};

// array-contains
// cities:  [{..., ciudad: Quito }, { ..., ciudad: GUyas, {... ciudad: Quito} }]
// where('cities', 'array-contains', "Quito") --> [{..., ciudad: Quito }, {... ciudad: Quito} }]

// in
// uno/city: Quito ,details: { name: "Sandy", age: 12 }
// dos/city: Guayaquil , details: { name: "Ricardo", age: 12 }
// tres/city: Guayaquil , details: { name: "Juan", }
// collection("children").where("details", 'in', age) --->
// [{city: Guayaquil , details: { name: "Ricardo", age: 12 }},
// {city: Quito ,details: { name: "Sandy", age: 12 }}
