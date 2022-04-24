console.clear();
/*
Arithemtic operations
+,-,*,/,%,++,--,**
*/

let x = 10;
let y = 5;
let z = 'js';

console.log(x+y);//15.  Add
console.log(x+z);//"10js". Concat
console.log(x-y);//5
console.log(x-z);//NaN. Not A Number
console.log(x/y);//2
console.log(x%y);//0. 5 * 2 + 1 = 11

//post increment var++  USE/PRINT first THEN add 1
console.log(x);//10
console.log(x++);//10.  PRINT FIRST 10 THEN add 1(10+1=11).
//When we use x next time it will be incremented by 1
console.log(x);//11

//pre increment  ++var  First add 1 Then USE/PRINT
console.log(x);//11
console.log(++x);//12. INCREATE FIRST(11+1=12), THEN PRINT THE NUMBER

//post decrement var-- : First Print variable, Then Subtract 1
console.log(x);//12
console.log(x--);//12. Then decrease by 1=11
console.log(x);//11

//pre decrement  --var : First decrease 1 one, Then print
console.log(x);//11
console.log(--x);//10
console.log(x);//10

//
console.log(y);//5
var myNum;//declare a variable
myNum=++y;//assigning value of y to that variable
console.log(myNum);//5


let favNum = 1;
let favNum1= 1;

favNum++;//post increment. 1 + 1 = 2
++favNum1;//pre increment. 1 + 1 = 2

//favNum= 2
//favNum1= 2

console.log(favNum);//2
console.log(favNum1);//2