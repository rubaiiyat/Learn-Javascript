class Employee {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
  displayInfo() {
    console.log(this.name, this.email, this.phone);
  }
}

let john = new Employee("John", "john@gmail.com", 56546);
john.displayInfo();
