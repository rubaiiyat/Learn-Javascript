const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");

    const photos = await response.json();

    console.log(photos);
  } catch (error) {
    console.log(error.message);
  }
};

fetchData();
