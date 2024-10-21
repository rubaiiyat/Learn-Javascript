function alertme() {
  alert("Thanks for alerting me");
}

function changecolor() {
  const element = document.getElementsByClassName("changetextcolor");

  for (let i = 0; i < element.length; i++) {
    element[i].style.color = "green";
  }
  console.log("working");
}

function innerhtml() {
  document.getElementById("hiddenhtml").innerHTML = "Thanks for showing me";

  console.log("working");
}
