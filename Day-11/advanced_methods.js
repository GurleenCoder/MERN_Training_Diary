//map//

let nums=[2,5,3,4];
let result1=nums.map(
    num=>num*2
)
console.log(result1);

let names=["Allen","Barb","Calley"];
let result=names.map(
    name=>name.toUpperCase()
)
console.log(result);

//filter//

let arr1=[2,4,3,7,55,60];
let result2=arr1.filter(
    arr1=>arr1%2==0
)
console.log(result2);

let result3=arr1.filter(
    arr1=>arr1%2!=0
)
console.log(result3);

let result4=arr1.filter(
    arr1=>arr1>50
)
console.log(result4);

//find//

let result5 = arr1.find(
    arr1=>arr1%2==0
)
console.log(result5);

let fruits=["apple", "mango"];
let result6= fruits.findIndex(
    fruit=>fruit=="mango"
)
console.log(result6);

//reduce//

let sum = arr1.reduce(function(acc,cVal){
    return acc*cVal;
},1);

console.log(sum);

let largest = arr1.reduce(function(acc,cVal){
    
    if (cVal > acc){
        return cVal;
    }

    return acc;
})

console.log(largest);

//forEach//

let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit, index) {
    console.log(index, fruit);
});

let numbers = [10, 20, 30, 40];

let sum = 0;

numbers.forEach(function(num) {
    sum = sum + num;
});

console.log(sum);





