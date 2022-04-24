console.clear();
/*
FUNCTIONS:
Below are the funstion that returns a value
*/
//1. creating a function
function sum(){
  
  let x=5;
  let y=10;
  
  return x+y;
}
//call that function
console.log(sum());//15


//2. Create a function that takes a number as parameter 
//and returns the square of that number
function square(num){
  return num*num;
}
//call
console.log(square(5));//25
console.log(square(6));//36

//3. We can assign an initial value in the function parameter
function addNums(num1=2,num2=4,num3=6){
  
  return num1+num2+num3;
  
}

//creating
console.log(addNums());//12
console.log(addNums(10,20,30));//60
console.log(addNums(10,20));//36
console.log(addNums(10,20,-5));//25

//Creating a function
function information(fName='John'){
  return `My name is ${fName}`;
}
//calling the function
console.log(information());//"My name is John"
console.log(information('Sam'));//"My name is Sam"