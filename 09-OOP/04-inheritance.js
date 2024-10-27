class Animal {
  constructor(eat, sleep) {
    this.eat = eat;
    this.sleep = sleep;
  }

  present() {
    return `They can ${this.eat} and ${this.sleep}`;
  }
}

class Moneky extends Animal {
  constructor(eat, sleep, eating_item) {
    super(eat, sleep);
    this.eating_item = eating_item;
  }

  show() {
    console.log(`${this.present()}. But they eat ${this.eating_item}`);
  }
}

let moneky = new Moneky("eat", "sleep", "banana");
moneky.show();
