{
  const heading = document.getElementById("heading");

  // innerHTML

  heading.innerHTML = "<i>Learning DOM</i>";

  console.log("Text Content:", heading.textContent);

  // Uncomment these one at a time to see the difference

  // heading.innerText = "Learning JavaScript";

  // heading.textContent = "DOM Manipulation";
}