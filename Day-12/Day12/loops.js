// for...in Loop

let student = {
  name: "Gurleen",
  age: 20,
  course: "B.Tech",
};

console.log("for...in");

for (let key in student) {
  console.log(key + " : " + student[key]);
}

// for...of Loop

let fruits = ["Apple", "Mango", "Banana", "Orange"];

console.log("\nfor...of");

for (let fruit of fruits) {
  console.log(fruit);
}