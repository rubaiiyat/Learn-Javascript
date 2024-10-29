function password(obj) {
  if (
    !obj.name ||
    !obj.birthYear ||
    !obj.siteName ||
    typeof obj.name != "string" ||
    typeof obj.siteName != "string"
  ) {
    return "invalid";
  }

  let len = obj.birthYear.toString().length;
  if (len != 4) {
    return "invalid";
  } else {
    let site = obj.siteName.charAt(0).toUpperCase();
    let fullSite = site + obj.siteName.slice(1);

    let name = obj.name;

    let birth = obj.birthYear;

    let password = `${fullSite}#${name}@${birth}`;

    return password;
  }
}

console.log(password({ name: "maisha", birthYear: 2002 }));
