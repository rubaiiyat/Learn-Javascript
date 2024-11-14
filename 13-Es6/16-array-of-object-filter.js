const instructor = [
  { name: "Nodi", age: 26, position: "Senior" },
  { name: "Akil", age: 25, position: "Junior" },
  { name: "Shagor", age: 36, position: "Senior" },
];

const senior = instructor.filter((seni) => seni.position == "Senior");
console.log(senior);
