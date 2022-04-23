console.clear();
//How to print in JS
console.log('Hello World!');//we can use single or double quote for strings
console.log("Hi!");
console.log(6+5);
//VARIABLES:
//Declaring a variable
//Keyword VarName = Value
//There are 3 keywords to declare a javascript variable
//They are var, let, const
var myName = 'Ahmet';
console.log(typeof(myName));//"string"
console.log(myName);
var myAge = 20;
console.log(typeof(myAge));//"number"
console.log(myAge);
var isEmployed = true;
console.log(typeof(isEmployed));//"boolean"
console.log(isEmployed);
var myLesson = 'javascript';
console.log(myLesson);
//we can use same variable with new value
myLesson = 'JAVA';
console.log(myLesson);
//We can assign even different data type for the same variable
myLesson = 100;
console.log(myLesson);
//We can assign new values tot eh same variable without using var keyword
myLesson = 'Apex';
console.log(myLesson);
//We can create variables using var keyword
//We can use the same variable again and again with no error
//But let, and const will have some restriction
