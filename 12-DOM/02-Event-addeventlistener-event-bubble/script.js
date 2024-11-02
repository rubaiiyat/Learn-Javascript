function changeColor() {
  const color1 = Math.floor(Math.random() * 175);
  const color2 = Math.floor(Math.random() * 175);
  const color3 = Math.floor(Math.random() * 175);

  const color = [color1, color2, color3];

  const btn = document.querySelector(".randomColor");
  btn.style.backgroundColor = `rgb(${color.join(",")})`;
}
let val = 1;
document.getElementById("decreaseID").addEventListener("click", function () {
  if (val > 1) {
    val -= 1;
    const decreaseValue = document.getElementById("ourValue");
    decreaseValue.innerText = val;
  } else {
    const decreaseValue = document.getElementById("ourValue");
    decreaseValue.innerText = "Decrease not possible less than 1";
  }

  const decreaseValue = document.getElementById("ourValue");
});

document.getElementById("increaseID").addEventListener("click", function () {
  val += 1;
  const decreaseValue = document.getElementById("ourValue");
  decreaseValue.innerText = val;
});

document.getElementById("resetID").addEventListener("click", function () {
  val = 1;
  const decreaseValue = document.getElementById("ourValue");
  decreaseValue.innerText = val;
});

document
  .getElementById("addCommentBtn")
  .addEventListener("click", function (event) {
    const commentUser = document.getElementById("username");
    const commentUserValue = commentUser.value;

    const comment = document.getElementById("comment");
    const commentValue = comment.value;

    const addComment = document.getElementById("addComment");

    const newComment = document.createElement("div");
    newComment.innerHTML = `
    <h1 class="font-bold text-xl text-white">${commentUserValue}</h1>
    <p class="text-sm">${commentValue}</p>
    <button class="text-error mb-10" >Delete Comment</button>
    
    `;

    addComment.appendChild(newComment);

    commentUser.value = "";
    comment.value = "";
  });
