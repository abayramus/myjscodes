/*
filter:
-iterates each item in an array in order
-checks the condition and returns the matched items 
-returns as a new array like map

*/
console.clear()
let years = [ 2022, 2000, 1960, 1980, 1800,1975, 1960]

//return the years that is greater than 1950
let yearsGreaterThat1950 =  years.filter(eachYear => eachYear > 1950);

console.log(yearsGreaterThat1950);//[2022, 2000, 1960, 1980, 1975, 1960]

//return the years that is in 1900s only
//[1960, 1980,1975, 1960]
let yearsIn20thCentury = years.filter(eachYear => eachYear>=1900 && eachYear <2000);
console.log(yearsIn20thCentury);//[1960, 1980, 1975, 1960]


//WITH  FOR EACH THE SOLUTION WOULD BE A LITTLE LONGER
let newYears=[]
years.forEach(eachYear =>{
  
  if(eachYear>=1900 && eachYear <2000){
    newYears.push(eachYear);
  }
  
} )
console.log(newYears);//[1960, 1980, 1975, 1960]