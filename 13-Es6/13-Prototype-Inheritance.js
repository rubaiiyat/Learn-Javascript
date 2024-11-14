class Person {
  constructor(firstName, lastName, age, food) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.food = food;
    this.income = 100;
  }
  show() {
    console.log(
      `Hello My Name is ${this.firstName} ${this.lastName}. My age is ${this.age}. My Favorite food is ${this.food} and my family total income is: ${this.income}`
    );
  }
}

const myFather = new Person("Ismail", "Hossain", 70, "Beef");
myFather.show();

const myMother = new Person("Afrin", "Islam", 55, "Biriyani");
myMother.show();
