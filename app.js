



console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i < 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
    else{
        continue;
    }
}


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(i = 0; i < 100; i++){
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log("FIZZBUZZ")
    }
    else if(i % 5 == 0){
        console.log("BUZZ")
    }
    else if (i % 3 === 0){
        console.log("FIZZ")
    }


}
console.log("EXERCISE 3:\n==========\n");
let x = 0;

while(x < 100){

if(x % 2 != 0){
    console.log(x)
}
x++;
}
let y = 0;
while(y < 100){
    y++;
    if (y % 3 == 0 && y % 5 == 0)
    {
        console.log("FIZZBUZZ")
    }
    else if(y % 5 == 0){
        console.log("BUZZ")
    }
    else if (y % 3 === 0){
        console.log("FIZZ")
    }
}

let z = 0;
do
{
    
    if(z % 2 != 0){
        console.log(z)
    }
    z++;
    
} while (z < 100);

let m = 0;
do{
    m++;
    if (m % 3 == 0 && m % 5 == 0)
    {
        console.log("FIZZBUZZ")
    }
    else if(m % 5 == 0){
        console.log("BUZZ")
    }
    else if (m % 3 === 0){
        console.log("FIZZ")
    }
}while(m < 100)

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for(i = 0; i <= n;i++){
    if(i === value){
        console.log(`' Found the value ${value}'`);
        break;
    }
    else if(i === n){
        console.log('Did not find value')
    }
}
console.log("EXERCISE 4:\n==========\n");


let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

for(i = start; i <= end; i++){
    if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log("FIZZBUZZ")
    }
    else if(i % buzzDivisor == 0){
        console.log("BUZZ")
    }
    else if (i % fizzDivisor === 0){
        console.log("FIZZ")
    }


}






  
