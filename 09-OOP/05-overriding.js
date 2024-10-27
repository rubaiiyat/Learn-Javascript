class Animal {
  sound() {
    console.log("Make some noise");
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
dog.sound();

let cat = new Cat();
cat.sound();
