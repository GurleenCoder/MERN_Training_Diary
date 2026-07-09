/*
    JavaScript Conditional Statements
    Topics Covered:
    1. if statement
    2. if...else statement
    3. if...else if ladder
    4. switch statement
*/

// 1. Check whether a number is positive, negative, or zero

let num = -8;

if (num > 0) {
    console.log(num + " is Positive");
}
else if (num < 0) {
    console.log(num + " is Negative");
}
else {
    console.log("The number is Zero");
}

// 2. Check whether a number is even or odd

let number = 15;

if (number % 2 == 0) {
    console.log(number + " is Even");
}
else {
    console.log(number + " is Odd");
}

// 3. Find the largest of two numbers

let a = 25;
let b = 40;

if (a > b) {
    console.log(a + " is the Largest Number");
}
else {
    console.log(b + " is the Largest Number");
}

// 4. Find the largest of three numbers

let x = 18;
let y = 42;
let z = 30;

if (x >= y && x >= z) {
    console.log(x + " is the Largest Number");
}
else if (y >= x && y >= z) {
    console.log(y + " is the Largest Number");
}
else {
    console.log(z + " is the Largest Number");
}

// 5. Print the day name using switch

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number");
}