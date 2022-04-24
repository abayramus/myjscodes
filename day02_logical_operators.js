console.clear();
/*
Logical Operators
== : Compare ONLY VALUES
!= : Compare ONLY VALUES

===: Compare BOTH VALUES AND DATA TYPE(MORE COMMON)
!==: Compare BOTH VALUES AND DATA TYPE
*/

//== : Compare ONLY VALUES
console.log(1==1);//T
console.log(1!=1);//F

console.log(1=="1");//T
console.log(1!="1");//F

//===: Compare BOTH VALUES AND DATA TYPE(MORE COMMON)
console.log(1===1);//T. Values : 1 and 1. Data Types: Number Number
console.log(1!==1);//F

console.log(1==="1");//F. Values : 1,1. Data Types : Number, String(NOT SAME)
console.log(1!=="1");//T.


/*
&& : AND operator
If All values are TRUE then result will be TRUE
All other cases, Result will be FALSE
Example: 
T&&T=T
T&&F=F
F&&T=F
F&&F=F
------------------
|| : OR operator
If All values are FALSE, then result will be FALSE
All other cases, Result will be TRUE
Example:
F||F = F
T||F = T
F||T = T
T||T = T
*/
const var1=true;
const var2=true;
const var3=false;

// &&
console.log(var1&&var2);//true
console.log(var1&&var3);//false
console.log(var1&&var2&&var3);//false

// ||
console.log(var1||var2);//true
console.log(var1||var3);//true
console.log(var1||var2||var3);//true
console.log(var3||false);//false cause all values are false

// !        
// !beautiful = ugly 
console.log(!var1);//false.   !var1 -> !true -> false
console.log(!var1&&var2);//false
console.log(!var1||var2||var3);//  !true || true  ||false = true
console.log(!var1||!var2||var3);// !true || !true ||false = false
console.log(!true);//false
console.log(!!true);//true. NOT COMMON
console.log(!(!true));//true. COMMON USAGE

//We can use combination of &&, ||, !
console.log( (true&&false) || (false) || !(true||false) );//false
//.              false     ||  false  || !(true) 
//.               false.   ||. false. ||. false
//.                            false
 
console.log( (true&&false) || (false) || (!true||false) );//false
//.             false.     ||.false.  ||.(false||false) );
//.             false.     || false.  ||. false
//                               false
