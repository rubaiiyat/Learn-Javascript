class employee {
  constructor(name, ID, age, position, from, location) {
    this.name = name;
    this.ID = ID;
    this.age = age;
    this.position = position;
    this.from = from;
    this.location = location;
  }

  startWork() {
    console.log("Working..........");
  }
}

const john = new employee(
  "John",
  32234534,
  32,
  "Software Engineer",
  "Bangladesh",
  "USA"
);

console.log(john.name);
john.startWork();

const Anila = new employee(
  "Anila",
  3223453433,
  32,
  "Lead Engineer",
  "Bangladesh",
  "USA"
);

console.log(Anila.name);
john.startWork();
