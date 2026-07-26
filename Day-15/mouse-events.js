const button = document.getElementById("btn");

button.addEventListener("click", function () {
  alert("Button Clicked!");
});

button.addEventListener("dblclick", function () {
  alert("Button Double Clicked!");
});

button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "lightgreen";
});

button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "";
});