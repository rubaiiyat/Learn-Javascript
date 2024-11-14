class Car {
  constructor(brand) {
    this.brand = brand;
  }

  present() {
    return `I have ${this.brand}`;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);

    this.model = mod;
  }

  show() {
    console.log(`${this.present()} it is a ${this.brand}`);
  }
}

const Tata = new Model("Tata", "Punch EV");
Tata.show();

const Audi = new Model("Audi", "AudiA4");
Audi.show();
