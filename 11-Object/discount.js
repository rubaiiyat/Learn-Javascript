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

let afterDiscount = [];
let originalTotalPrice = 0;
let discountTotalPrice = 0;
for (const product of products) {
  originalTotalPrice += product.price;
  const discount = (product.price * 10) / 100;
  product.price -= discount;

  discountTotalPrice += product.price;
  afterDiscount.push(product);
}
console.log(afterDiscount);
console.log(
  `Before 10% Discount Total Price= ${originalTotalPrice.toFixed(2)}`
);
console.log(
  `After  10% Discount Total Price= ${discountTotalPrice.toFixed(2)}`
);
