function myData() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      resolve("Successfully Done it");
    } else {
      reject(new Error("This is rejected"));
    }
  });
}

myData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
