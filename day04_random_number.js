console.clear();
/*
RANDOM NUMBER:
Use Math.random() to get a random number 
between 0(inclusive)-1(exclusive)
*/

//Step 1: get a random number
let randomNumber = Math.random();
console.log(randomNumber);


//Get a random number 1-100
//Step 2: Math.floor(randomNumber) -> floor rounds the number dowm to a whole number
//Multiply by 100 
randomNumber*=100;
console.log(randomNumber);

//Round down to the closest whole number
randomNumber=Math.floor(randomNumber);
console.log(randomNumber);// 0-99

//Increament the number by 1 get numbers between 1-100
randomNumber++

console.log(randomNumber);//1-100






