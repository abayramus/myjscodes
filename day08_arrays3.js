/*



*/
console.clear();
let myList = [5,7,-5,0,2,10];

//1. includes(item): returns true if array includes an item
let is2Exist = myList.includes(2);
console.log(is2Exist);//true
let is100Exist = myList.includes(100);
console.log(is100Exist);//false

//2. slice(start(INCLUDE),end(EXCLUDED)); //returns sub array
let sub1 = myList.slice(2);
console.log(sub1);//[-5, 0, 2, 10]

let sub2 = myList.slice(2,4);
console.log(sub2);//[-5, 0]

//we can use - index with slice. this means start from the end
let last2Item = myList.slice(-2);//last 2 item
console.log(last2Item);//[2, 10]

//last 3 item not including the last item
//0,2 only
let sub3=myList.slice(-3,-1)
console.log(sub3);//[0, 2]


//3. sort the myList in desending order:[10,7,5,2,0,-5]
console.log(`Original Array : ${myList}`);//"Original Array : 5,7,-5,0,2,10"
console.log(`Asending Array : ${myList.sort()}`);//"Asending Array : -5,0,10,2,5,7"
console.log(`Decending Array : ${myList.sort().reverse()}`);//"Decending Array : 7,5,2,10,0,-5"

//NOTE: when we use sort with numbers, result may mislead
//Then we use a function that results the result
let nums = [5,10,-6,33,1,0];
console.log(nums);
// console.log(nums.sort());
//Use function inside sort when sorting then numbers
nums.sort((a,b)=>{return a-b});//Sorting in asending order
nums.sort(
  function(a,b){//Alternatively, we can use normal function
  return a-b;
}
)

console.log(nums);//[-6, 0, 1, 5, 10, 33]
nums.sort((a,b)=>{return a-b}).reverse();//Desending order
console.log(nums);//[33, 10, 5, 1, 0, -6]



//4. sort strings:
let toDo = ['buy','shop','fly','jump','learn'];
console.log(toDo)
console.log(toDo.sort());//asening order
console.log(toDo.sort().reverse());//decending order









