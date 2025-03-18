const fetchPost = async () => {
  try {
    console.log("Fething post.......");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Fetching is not loading.......");
    } else {
      const posts = await response.json();
      console.log(posts);
    }
  } catch (error) {
    console.log(error.message);
  }
};

fetchPost();
