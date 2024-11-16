const product = {
  id: 1,
  name: "Wireless Headphones",
  category: "Electronics",
  price: 49.99,
  stock: 25,
  brand: "SoundMax",
  rating: 4.5,
  reviews: [
    {
      reviewer: "John Doe",
      comment: "Great sound quality for the price!",
      rating: 5,
    },
    {
      reviewer: "Jane Smith",
      comment: "Comfortable but could be louder.",
      rating: 4,
    },
  ],
  discount: {
    percentage: 10,
    validTill: "2024-12-31",
  },
};

console.log(product);

const stringified = JSON.stringify(product);
console.log(stringified);

const parseProduct = JSON.parse(stringified);
console.log(parseProduct);
