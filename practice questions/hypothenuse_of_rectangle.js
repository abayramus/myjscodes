/* 
Get both sides of the triangle and print 
the hypothenuse of the triangle. Round your answer to the nearist whole number.
h = sqrootof(base^2+alt)
Math.sqrt(9);
*/

function calHyp(base,altitude){
    return (Math.round(Math.sqrt(base**2+altitude**2)));
 }
 
 var base = prompt('Enter the base');
 
 var altitude = prompt('Enter the altitude');
 
 var hype = calHyp(base,altitude);
 
 console.log(`The hypotenus value for Base=${base} and Altitude= ${altitude} is ${hype}`);