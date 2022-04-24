console.clear();
/*
PROMPT:
Promt is used for gettting an input from a user
-------------------------------------
Ask user “what is your car’s age?”
Calculate and print your own car’s age based on this:
You car age is 1 more than 2 times older than the other car
*/

let carAge = prompt('what is your car’s age?');
console.log('Your car age : '+carAge);

let myCarAge = 1+2*carAge;
console.log('My Car Age : '+myCarAge);

/*
String Manupilations:
Ask user to enter a name: and print “name”
Make sure only the first initial is always capital and the rest always small
Eg:
var name=ahmet;  =>>>>Ahmet
var name=aHmet;  =>>>>Ahmet
var name=AHMET   =>>>>Ahmet
*/

let firstName = prompt('Enter your name');
console.log(firstName);
let capitalized = firstName.trim().substring(0,1).toUpperCase()+firstName.trim().substring(1).toLowerCase();
console.log(capitalized);

//Using backtick
let capitalizedWithBacktick=`${firstName.trim().substring(0,1).toUpperCase()}${firstName.trim().substring(1).toLowerCase()}`
console.log(capitalizedWithBacktick)








