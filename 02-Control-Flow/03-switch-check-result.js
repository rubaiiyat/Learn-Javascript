const mark = 40;

let result;

switch (true) {
  case mark >= 80 && mark <= 100:
    result = "A+";
    break;
  case mark >= 70 && mark < 80:
    result = "A";
    break;
  case mark >= 60 && mark < 70:
    result = "A-";
    break;
  case mark >= 50 && mark < 60:
    result = "B";
    break;
  case mark >= 40 && mark < 50:
    result = "C";
    break;
  case mark < 40:
    result = "F";
    break;
  default:
    result = "Invalid Mark";
}

console.log(result);
