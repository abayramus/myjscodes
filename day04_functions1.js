console.clear();
/*
FUNCTIONS:
We use functions to perform a task or to calculate a value
Below are the function with no return
*/

//1. Creating a function named greet
function greet(){
  console.log('Hi, How are you?');
}
//Call the function
greet();//"Hi, How are you?"

//2. Creating a function named greetPeople with one paremeter
//The function will take name of people and greet them
function greetPeople(personName){
  console.log('Hi, '+personName);//  \n -> start from a new line
}
//Call the function
greetPeople('Ahmet');//"Hi, Ahmet"
greetPeople('Sam');//"Hi, Sam"

//3. We can assign multiple parameters
function personInfo(fName,lName,age,isEmployed){
  console.log(`First Name : ${fName}. Last Name : ${lName}. Age : ${age}. Is Employed : ${isEmployed}`);
}
//calling the function
personInfo('John','Walker',50,true);//"First Name : John. Last Name : Walker. Age : 50. Is Employed : true"

personInfo('Sam','Parker',18);//First Name : Sam. Last Name : Parker. Age : 18. Is Employed : undefined

personInfo('Sam',18);//"First Name : Sam. Last Name : 18. Age : undefined. Is Employed : undefined"
