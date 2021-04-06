export const calculatePrice = (products) => {
  const subtotal = products.reduce((acum, curr) => acum + curr.price, 0);
  const iva = 0.12;
  const IVAPrice = Number(Number(subtotal * iva).toFixed(2));
  const total = Number(Number(IVAPrice + subtotal).toFixed(2));
  return { subtotal, iva, total, IVAPrice };
};

export const formatOrders = ({ products, customer, price }) => {
  const formatProducts = Object.values(
    products.reduce((acum, { seller, ...rest }) => {
      const _products = acum[seller.uid] ? [...acum[seller.uid].products, rest] : [rest];
      return { ...acum, [seller.uid]: { ...seller, products: [..._products] } };
    }, {})
  );
  // add date in all
  // to admin and user
  const registerOrder = { customer, products, ...price };
  // to sellers
  const productsBySeller = formatProducts.map((item) => {
    const _subtotal = item.products.reduce((acum, curr) => acum + curr.price, 0);
    const _total = Number(((1 + price.iva) * _subtotal).toFixed(2));
    return { total: _total, subtotal: _subtotal, products: item.products, customer, uid: item.uid };
  });

  return { adminOrder: registerOrder, ordersBySeller: productsBySeller };
};
