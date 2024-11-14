const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 29.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 45.0,
    inStock: false,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    price: 59.99,
    inStock: true,
  },
  {
    id: 4,
    name: "Laptop Stand",
    category: "Office Supplies",
    price: 25.5,
    inStock: true,
  },
  {
    id: 5,
    name: "Water Bottle",
    category: "Home & Kitchen",
    price: 15.0,
    inStock: true,
  },
  {
    id: 6,
    name: "Smart Watch",
    category: "Electronics",
    price: 120.0,
    inStock: false,
  },
  {
    id: 7,
    name: "Yoga Mat",
    category: "Fitness",
    price: 19.99,
    inStock: true,
  },
  {
    id: 8,
    name: "Desk Lamp",
    category: "Office Supplies",
    price: 32.99,
    inStock: true,
  },
  {
    id: 9,
    name: "T-shirt",
    category: "Apparel",
    price: 12.99,
    inStock: true,
  },
  {
    id: 10,
    name: "Notebook",
    category: "Office Supplies",
    price: 4.99,
    inStock: false,
  },
];

const Names = products.map((product) => product.name);
console.log(Names);

const ID = products.forEach((product) => console.log(product.id));

const Price = products.find((product) => product.price > 5);
console.log(Price);

const FilterPrice = products.filter((product) => product.price > 20);
console.log(FilterPrice);
console.log(`Find Total Products: ${FilterPrice.length}`);

const reduceProduct = products.reduce(
  (accumulate, currentValue) => accumulate + currentValue.price,
  0
);

console.log("Total Price of Product: " + reduceProduct);
