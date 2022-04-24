console.clear();
/*
Substring and Slice:

*/

let str = 'I like js';

//substring: (startIndex, endIndex)   OR (startIndex)
let sub1 = str.substring(2,6);
console.log(sub1);//like

let sub2 = str.substring(2);//start from 2 till the end
console.log(sub2);//like js

let sub3 = str.substring(6,2);//start > end is possible
console.log(sub3);//like

//slice : (startIndex, endIndex)   OR (startIndex)
let sub4 = str.slice(2,6);
console.log(sub4);//"like"

let sub5=str.slice(2);
console.log(sub5);//"like js"

let sub6=str.slice(6,2);
console.log(sub6);//""

//using negative index with slice
//Negative index means start from right(end)
let sub7 = str.slice(-1);//returns the last letter of a string
console.log(sub7);//s

let sub8 = str.slice(-4,-1);
console.log(sub8)