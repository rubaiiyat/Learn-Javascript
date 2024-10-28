function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  } else {
    let newArr = [];
    for (arr of array) {
      let num = typeof arr;

      if (num == "number") {
        if (arr >= 0 || arr <= 0) {
          newArr.push(arr);
        }
      }
    }

    return newArr;
  }
}

console.log(deleteInvalids({ num: [1, 2, 3] }));
