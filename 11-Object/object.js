const person = {
  name: "John",
  email: "john@gmail.com",
  phone: 564567,
  car: {
    brand: "Tesla",
    model: "D3",
    price: 4235,
    manufacture: {
      ownar: "Elon Mask",
      country: "USA",
    },
  },
};

console.log(person);
console.log(person.name);
console.log(person.car);
console.log(person.car.brand);
console.log(person.car.manufacture);
console.log(person.car.manufacture.country);
