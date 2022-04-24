console.clear();
/*
ROUNDING NUMBERS IN JS:
There are 4 ways to round numbers:
let num;

1. Round Up  : Math.ceil(number);

2. Round down: Math.floor(number);

3. Round to the closest whole number: Math.round(number);

4. Round to a fixed digit: number.toFixed(digit number)

*/
let myFavNum = 15.45678


//round up to the closest whole number
let ceiledNumber = Math.ceil(myFavNum);
console.log(ceiledNumber);//16

//round down to the closest whole number
let flooredNumber = Math.floor(myFavNum);
console.log(flooredNumber);//15

//round to the closest whole number
let roundedNumber = Math.round(myFavNum);
console.log(roundedNumber);//15

//round the number to the 2 digit after decimal point
let fixedNumber = myFavNum.toFixed(2);
console.log(fixedNumber);//15.46

















