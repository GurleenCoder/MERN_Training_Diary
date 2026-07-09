function isEven(num){
    if(num%2==0){
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
}

isEven(8);
isEven(13);

// Ques 2

function findCube(num){
    return (num*num*num);
}

console.log(findCube(5));

//Ques 3

let convert=(celsius)=>{
    let fahren= (9/5) * celsius + 32;
    return fahren;
}

console.log(convert(97));


//Ques 4

let str_length=(s)=>{
    return s.length;
}

console.log(str_length("Hello"));

//Ques 5

let lastChar=(s)=>{
    return s[s.length-1]
}

console.log(lastChar("Hello"));

//Ques 6

function squareRoot(num){
    return Math.sqrt(num);
}
console.log(squareRoot(25));



