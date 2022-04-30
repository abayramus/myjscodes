/*
SPREAD OPERATOR:
SPread operator is used for combining arrays
... means spread operator
...ARRAY means get each and every single value from the array
*/
console.clear()
let fruits = ['apple','kiwi','cherry','banana']
let citrus= ['lime','lemon','orange']


//combine the arrays
//way 1
citrus.forEach(eachItem=>fruits.push(eachItem))
console.log(fruits);//["apple", "kiwi", "cherry", "banana", "lime", "lemon", "orange"]

let list1 = ['apple','kiwi','cherry','banana']
let list2 = ['lime','lemon','orange']
//way 2
let combinedList = [...list1,...list2]
console.log(combinedList);//["apple", "kiwi", "cherry", "banana", "lime", "lemon", "orange"]
console.log(combinedList[0]);//"apple"


let myFavList = ['watch','iphone',...list1];//["watch", "iphone", "apple", "kiwi", "cherry", "banana"]
console.log(myFavList)

let myFavList1 = ['cat',...list1,'dog','elephant']
console.log(myFavList1)

let myLastList = [list1,list2]
console.log(myLastList);//[["apple", "kiwi", "cherry", "banana"], ["lime", "lemon", "orange"]]
console.log(myLastList[0][0]);//apple