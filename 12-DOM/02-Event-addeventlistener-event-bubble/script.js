function changeColor() {
  const color1 = Math.floor(Math.random() * 175);
  const color2 = Math.floor(Math.random() * 175);
  const color3 = Math.floor(Math.random() * 175);

  const color = [color1, color2, color3];

  const body = document.getElementsByTagName("*")[0];
  body.style.backgroundColor = `rgb(${color.join(",")})`;
}
