function stopWatch() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const watch1 = stopWatch();
console.log("Watch 1- ", watch1());
console.log("Watch 1- ", watch1());
const watch2 = stopWatch();
console.log("Watch 2- ", watch2());
console.log("Watch 1- ", watch1());
console.log("Watch 2- ", watch2());
