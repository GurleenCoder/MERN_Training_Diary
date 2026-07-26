const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  alert("Form Submitted Successfully!");
});

const input = form.querySelector("input");

input.addEventListener("change", function () {
  console.log("Changed Value:", input.value);
});