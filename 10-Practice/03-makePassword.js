function password(obj) {
  if (obj.birthYear.length != 4) {
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

console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
