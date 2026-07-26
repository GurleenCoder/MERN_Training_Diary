// Original Object

let student = {
  name: "Gurleen",
  age: 20,
  marks: {
    maths: 95,
  },
};

// Shallow Copy

let shallowCopy = { ...student };

shallowCopy.name = "Simran";
shallowCopy.marks.maths = 100;

console.log("Original:", student);
console.log("Shallow Copy:", shallowCopy);

// Deep Copy

let deepCopy = structuredClone(student);

deepCopy.name = "Aman";
deepCopy.marks.maths = 80;

console.log("Original:", student);
console.log("Deep Copy:", deepCopy);