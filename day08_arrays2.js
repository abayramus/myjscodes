/*Splice:
Splice is used for adding, updatinf, ot removing items from an array
splice(start)
splice(start,deletecount)
splice(start,deletecount,item)
splice(start,deletecount,item1,item2,item2,...)

*/
console.clear();
let myList = ['apple','apple','orange','banana',false,10]

console.log('Before : '+myList);//"Before : apple,apple,orange,banana,false,10"
// myList.splice(2);//start index 2. delete 2 and proceeding items
// console.log('Before : '+myList);//"Before : apple,apple"

//splice(start,deletecount)
myList.splice(2,1);//start index:2, itemsdeleted:1
console.log('After : '+myList);//"After : apple,apple,banana,false,10"


//splice(start,deletecount,item)
//"After : apple,apple,banana,false,10"
myList.splice(1,2,'APRICOT');//start:1, deletecount:2,insert:'APRICOT'
console.log(myList);//["apple", "APRICOT", false, 10]


//splice(start,deletecount,item1,item2,item3,...)
//["apple", "APRICOT", false, 10]
//remove apple ONLY
//insert 'orange', 'strawbery', 'watermelon'
//FINAL : ['orange', 'strawbery', 'watermelon', "APRICOT", false, 10]
myList.splice(0,1,'orange', 'strawbery', 'watermelon');
console.log(myList);//["orange", "strawbery", "watermelon", "APRICOT", false, 10]



//Negative index: start from the end
//delete the last item
myList.splice(-1);
console.log(myList);//["orange", "strawbery", "watermelon", "APRICOT", false]










