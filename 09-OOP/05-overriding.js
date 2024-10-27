class Animal {
  sound() {
    console.log("They Make some noise");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meaw");
  }
}

let dog = new Dog();
let cat = new Cat();

dog.sound();
cat.sound();
