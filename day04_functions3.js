console.clear();
/*
ANONYMOUS FUNCTIONS:
Below are the funstion that returns a value
*/
//1. TRADITIONAL FUNCTION
function sum(){
  
  let x=5;
  let y=10;
  
  return x+y;
}
//call that function
console.log(sum());//15

//2. Anonymous Function
let sum1=function(){
  
  let x=5;
  let y=10;
  
  return x+y;
}
console.log(sum1());//15

//3. Traditional function with parameters
function square(num){
  return num*num;
}
console.log(square(5));//25
//3. Anonymous Function with parameters
let square1 = function(num){
  return num*num;
}
console.log(square1(5));//25

