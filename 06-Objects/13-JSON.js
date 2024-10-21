let product = {
  products: [
    { name: "phone", price: 90, from: "japan" },
    { name: "watch", price: 50, from: "China" },
    { name: "earbuds", price: 70, from: "UK" },
    { name: "mouse", price: 20, from: "USA" },
  ],
};

product.products.forEach((item) => {
  console.log(item.name);
});
