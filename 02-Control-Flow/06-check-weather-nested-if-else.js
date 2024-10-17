let weather = "rainy";
let tempareture = "24";

if (weather == "sunny") {
  if (tempareture >= 25) {
    console.log("it's too hot");
  } else if (tempareture >= 20 && tempareture < 25) {
    console.log("Its a warm day");
  } else {
    console.log("It's a cool day");
  }
} else if (weather == "rainy") {
  console.log("Take your umbrella");
} else {
  console.log("Check Weather Forecast");
}
