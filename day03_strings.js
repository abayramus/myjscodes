console.clear();
/*
STRINGS IN JS
'' Single quote
"" Double Quote
`` BackTick 
*/
var str1= 'java';
console.log(str1);//java
var str2= 'javascript'
console.log(str2);//javascript
var age = 50;

// My lesson is 'javascript' 
// We can use '' in "" for quotation
//We cannot use '' in a '' directly
//if we want to use '' in a '' we need to use \\
// \'word\'

console.log("My lesson is 'javascript'");//My lesson is 'javascript'
//console.log('My lesson is 'javascript'');//ERROR
console.log('My lesson is \'javascript\'');////My lesson is 'javascript'

//CONCATONATION
//I like java and javascript. I am 50 years old.
//java, javascript, 50 use variables
console.log("I like java and javascript. I am 50 years old.");

console.log("I like "+str1+" and "+str2+". I am "+age+" years old.");

//BACKTICK  ${variable}
console.log(`I like ${str1} and ${str2}. I am ${age} years old.`)
/*Summary about backtick
1. Backtick is used for string creation
2. Backtick can accept a number, stting, boolean, or variables
3. Backtick is especially usefull when concatanation
4. ${} must be used for passing a variable inside a string
*/