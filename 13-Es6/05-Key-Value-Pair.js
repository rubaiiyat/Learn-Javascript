const person = {
  name: "Abir",
  age: 23,
  isUniversity: true,
  id: 43,
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

const programmer = {
  firstname: "Phil",
  age: 21,
  backendDeveloper: true,
  languages: ["Python", "JavaScript", "Java", "C++"],
  "current project name": "The Amazing App",
};

console.log(programmer["current project name"]);
