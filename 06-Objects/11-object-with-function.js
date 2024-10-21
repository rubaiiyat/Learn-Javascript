let person = {
  name: "Abir",

  greeting: function () {
    return `Hello ${this.name} welcome to your profile`;
  },
};

console.log(person);
console.log(person.greeting());
