const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 19.99,
    inStock: true,
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 29.99,
    inStock: false,
  },
  {
    id: 3,
    name: "Notebook",
    category: "Stationery",
    price: 2.49,
    inStock: true,
  },
  {
    id: 4,
    name: "Desk Lamp",
    category: "Furniture",
    price: 15.99,
    inStock: true,
  },
  {
    id: 5,
    name: "Water Bottle",
    category: "Accessories",
    price: 9.99,
    inStock: false,
  },
];

let totalPrice = 0;

for (let product of products) {
  totalPrice += product.price;
}

console.log(totalPrice.toFixed(2));
