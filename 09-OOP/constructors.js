function Cars(name, model, price) {
  this.name = name;
  this.model = model;
  this.price = price;

  console.log(`Name: ${this.name}\nModel: ${this.model}\nPrice: ${this.price}`);
}

Cars("Toyota Corolla", "Toyota Corolla L, LE, XLE", 20000);
Cars("Toyota Corolla", "Nothing", 20000);
