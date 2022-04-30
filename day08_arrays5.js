/*
reduce:
Accumulation by adding each value in an array
hold the current value and accumulated sum

*/
console.clear()
let years = [ 3, 2, 5, 1, -4,0, 10]
let result = years.reduce((accumulator,currentNumber)=>accumulator+currentNumber)
// years.reduce((x,y)=> x+y);
// console.log(result);//17


let result1 = years.reduce((accumulator,currentNumber)=>{
  console.log(accumulator)
  console.log(currentNumber)
  console.log(years)
  return accumulator+currentNumber
})

console.log('FINAL RESULT : '+result1)


//We can use different operators with reduce function:
let multipliedAccumulation = years.reduce((x,y)=>x*y)
//Accumulator x : 3, 3*2=6, 6*5=30, 30*1=30, 30*-4=-120, -120*0=0, 0*10=0(FINAL VALUE)
console.log(multipliedAccumulation);//0