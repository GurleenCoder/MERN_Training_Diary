/*
    JavaScript Loops

    Programs:
    1. Find factorial of a number
    2. Reverse a number
    3. Print prime numbers from 1 to 100
    4. Right angled triangle

*/

// Find the factorial of a number

let num = 5;
let factorial = 1;

for(let i = 1; i <= num; i++)
{
    factorial = factorial * i;
}

console.log("Factorial of", num, "is", factorial);

// Reverse a number

let number = 1234;
let reverse = 0;

while(number > 0)
{
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

console.log("Reversed Number =", reverse);

// Print all prime numbers from 1 to 100

for(let num = 2; num <= 100; num++)
{
    let isPrime = true;

    for(let i = 2; i < num; i++)
    {
        if(num % i == 0)
        {
            isPrime = false;
            break;
        }
    }

    if(isPrime)
    {
        console.log(num);
    }
}

// Star Pattern - Right Angled Triangle

let rows = 5;

for(let i = 1; i <= rows; i++)
{
    let pattern = "";

    for(let j = 1; j <= i; j++)
    {
        pattern += "* ";
    }

    console.log(pattern);
}