// Creating an Object

let student = {
  name: "Gurleen",
  age: 20,
  course: "B.Tech CSE",
};

console.log(student);

// Accessing Properties
console.log(student.name);
console.log(student["course"]);

// Adding Property
student.city = "Ludhiana";

// Updating Property
student.age = 21;

// Deleting Property
delete student.city;

console.log(student);