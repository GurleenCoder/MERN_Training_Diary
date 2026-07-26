const student = {
  name: "Gurleen",
  age: 20,
  course: "B.Tech",
};

console.log("Keys:", Object.keys(student));

console.log("Values:", Object.values(student));

console.log("Entries:", Object.entries(student));

let address = {
  city: "Ludhiana",
  state: "Punjab",
};

let details = Object.assign({}, student, address);

console.log("Assign:", details);

Object.freeze(student);
// student.age = 25; // No effect
console.log("Freeze:", student);

let employee = {
  name: "Rahul",
  salary: 50000,
};

Object.seal(employee);
employee.salary = 55000;
// employee.city = "Delhi"; // Not added
console.log("Seal:", employee);

console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("phone"));