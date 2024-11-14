const person = [
  { name: "Meena", age: 26 },
  { name: "Mitu", age: 36 },
  { name: "Raju", age: 22 },
];

const calculateAge = person.reduce(
  (acumulate, currentValue) => acumulate + currentValue.age,
  0
);

console.log(calculateAge);
