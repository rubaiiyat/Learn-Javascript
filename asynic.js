function first() {
  console.log("First");
}

function second() {
  setTimeout(() => {
    console.log("Second");
  }, 2000);
}

function third() {
  console.log("Third");
}

first();
second();
third();
