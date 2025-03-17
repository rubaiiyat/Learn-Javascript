const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const submit = document.getElementById("submit");
const remove = document.getElementById("remove");

const saveData = () => {
  const name = nameField.value;
  const email = emailField.value;
  const message = messageField.value;
  const formData = {
    name,
    email,
    message,
  };

  localStorage.setItem("user", JSON.stringify(formData));
};

submit.addEventListener("click", (event) => {
  event.preventDefault();
  saveData();
});

const loadData = () => {
  const saveData = localStorage.getItem("user");

  if (saveData) {
    const parseData = JSON.parse(saveData);
    const name = parseData.name;
    const email = parseData.email;
    const message = parseData.message;

    nameField.value = name;
    emailField.value = email;
    messageField.value = message;
  }
};
document.addEventListener("DOMContentLoaded", loadData);

remove.addEventListener("click", (event) => {
  event.preventDefault();
  localStorage.removeItem("user");

  nameField.value = "";
  emailField.value = "";
  messageField.value = "";
  alert("Data has been deleted");
});
