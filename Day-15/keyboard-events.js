const input = document.getElementById("textbox");

input.addEventListener("keydown", function (event) {
  console.log("Key Pressed:", event.key);
});

input.addEventListener("keyup", function (event) {
  console.log("Key Released:", event.key);
});