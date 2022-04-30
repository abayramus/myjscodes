/*
find      :returns the first value that mathces the condition
findIndex :retruns the first index of the value that matches the condition 
*/
console.clear()
let itemCounts = [3,4,7,1,8,4,-1,0,10]

//print the first number that is greater than 7
let firstMatch = itemCounts.find(eachNumber=>eachNumber>7);

console.log(firstMatch);//8

let firstNegativeNum = itemCounts.find(eachNumber=>eachNumber<0);
console.log(firstNegativeNum);//-1

//findIndex

//print the first index of the number that is greater than 7
let indexOfFirstMatch= itemCounts.findIndex(eachNumber=>eachNumber>7);
console.log(indexOfFirstMatch);//4