console.clear();
/*ARRAYS
Arrays are special type of objects
Arrays are used for storing similar type of data
We use index to access the values of arrau
Index starts at 0
*/
let friendList = ['Sam','Tom','Tim','Jacob'];
console.log(typeof(friendList));//"object"
console.log(friendList);//["Sam", "Tom", "Tim", "Jacob"]
console.log(friendList[0]);//Sam
console.log(friendList[4]);//undefined. There is no data in index of 4

//Edit array values
friendList[0]='Nancy';
console.log(friendList);//["Nancy", "Tom", "Tim", "Jacob"]

//Add new values
friendList[5]='Jacob';
console.log(friendList);//["Nancy", "Tom", "Tim", "Jacob", undefined, "Jacob"]

//NOTE: adding index is not recommended, and it is not common
//1. push() : adds elements at the end of an array

friendList.push('alex');
console.log(friendList);//["Nancy", "Tom", "Tim", "Jacob", undefined, "Jacob", "alex"]

//2. unshift() : adds elements at the beginning of an array
friendList.unshift('Suresh','Sirini');
console.log(friendList);//["Suresh", "Sirini", "Nancy", "Tom", "Tim", "Jacob", undefined, "Jacob", "alex"]

//3. pop() : removes the last element from an array
friendList.pop();
console.log(friendList);//["Suresh", "Sirini", "Nancy", "Tom", "Tim", "Jacob", undefined, "Jacob"]

//4. shift() : removed the first element from an array
friendList.shift();
console.log(friendList);//["Sirini", "Nancy", "Tom", "Tim", "Jacob", undefined, "Jacob"]



















