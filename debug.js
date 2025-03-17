const task = [];

function addTask(name) {
  task.push(name);
}

function removeTask(remove) {
  if (task.length <= remove || remove < 0) {
    throw new Error("Please Enter the valid index");
  }

  task.splice(remove, 1);
  console.log("Task deleted", remove);
}

try {
  addTask("Learning js");
  addTask("Practice js");
  addTask("Push it in github");
  console.log(task);
  removeTask(4);
  console.log(task);
} catch (error) {
  console.log(error.message);
}
