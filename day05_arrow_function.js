console.clear();
/*
ARROW FUNCTIONS WITH ONE PARAMETER:
(a) => a+1; 
*/
//Traditional function with one parameter:
function sum(a){
  return a+100;
}
console.log(sum(10));//110

//Write this as anonymus function
const sum1= function(a){
  return a+100;
}
console.log(sum1(11));//111

//Write that as ARROW function
//1. Remove function keyword AND use => Write before the body
const sum2=(a)=>{//This is an arrow function
  return a+100;
}
console.log(sum2(12));//112
//2. We can simplify this further
//Remove {} and return keyword
const sum3=(a)=>a+100;
console.log(sum3(13));//113
//3.Remove the (). NOTE: THis is possible when there is only one parameter,
const sum4 = a => a+100
console.log(sum4(14));//114



/*
ARROW FUNCTIONS WITH ONE PARAMETER:
Write a function that returns the square of the number.
*/
const sum5 = a => a*a
console.log(sum5(15));//225



/*
ARROW FUNCTIONS WITH NO PARAMETER:
*/
function sum6(){
  return 'Hello World!'
}
console.log(sum6());//"Hello World!"

//with arrow function
//if i want to create a resuable arrow function THAT I CAN CALL, I need to assign it to a variable
const sum7 = () => {
  return 'Hello World!'
}

const x=10,y=20;
const sum8 = () =>{
  return x+y;
}
console.log(sum8());//30


/*
ARROW FUNCTIONS WITH MULTIPLE PARAMETER:
*/
function info(name, age, state){
  return `Name : ${name}. Age : ${age}. State : ${state}`;
}
console.log(info('John',80,'TX'));//"Name : John. Age : 80. State : TX"

//creting the same function using arrow function
const info1 = (name,age,state) => `Name : ${name}. Age : ${age}. State : ${state}`
console.log(info1('Tim',40,'NJ'));