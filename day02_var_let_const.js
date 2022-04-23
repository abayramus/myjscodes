console.clear();
/*
var, let, const
*/

//1. var : the olders variable declaration
//Scope : scope of var is the largest.


var num = 5;
console.log(num);//5


//I can override the previous value using the same variable
var num = 6;
console.log(num);//6

//I do not need to use var keyword to override the variable
num = 7;
console.log(num);

//2. let: let came ofter ES6. let is similr to var, but let has some restriction
let mName = 'java';
console.log(mName);//"java"

//I can override the previous value using the same variable WITHOUT LET KEYWORD
mName = 'javascript';// "javascript"
console.log(mName)
//let mName = 'javascript';//ERROR cause there are 2 let is used for same variable

// NOTE: we should avoid using var keyword. 

//3. const: const came after ES6. this has the most restriction. 
//We can not assing a new value to a const variable!!!
//we use const when you do not want to change the value of a variable such as pi, ...
//scope of const is the least

const myPhone = 123;
console.log(myPhone);//123

//myPhone=0123;//ERROR
console.log(myPhone);













