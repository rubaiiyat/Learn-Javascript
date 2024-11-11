const numbers = (number) => number;

console.log(numbers([1, 2, 3, 4, 5]));

const getSalary = (employee) => employee.salary;

const employee = { name: "Abir", salary: 200, student: true };

console.log(getSalary(employee));

const calculator = (num1, num2) => ({
  addition: num1 + num2,
  subtruction: num1 + num2,
  multiplication: num1 * num2,
  division: num1 / num2,
  remainder: num2 % num2,
});

console.log(calculator(15, 6));
