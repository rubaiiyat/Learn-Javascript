function checkName(name) {
  let type = typeof name;

  if (type == "string") {
    let len = name.length;
    name = name.toLowerCase();
    for (let n of name) {
      if ((n >= "a" && n <= "z") || (n >= "A" && n <= "Z")) {
        if (
          name[len - 1] == "a" ||
          name[len - 1] == "y" ||
          name[len - 1] == "i" ||
          name[len - 1] == "e" ||
          name[len - 1] == "o" ||
          name[len - 1] == "u" ||
          name[len - 1] == "w"
        ) {
          return "Good Name";
        } else {
          return "Bad Name";
        }
      } else {
        return "Bad Name";
      }
    }
  } else {
    return "invalid";
  }
}

console.log(checkName("Salman"));
