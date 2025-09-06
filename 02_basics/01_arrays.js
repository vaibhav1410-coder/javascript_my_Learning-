// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
const arr = [0,1,2,3,"vaibhav"]          //Array can be of multiple datatypes in javascript.
       //Refer to mdn for basics of array.  Array can be resized. Zero-based indexing. Array declared in square brackets

const myArr2 = new Array(1, 2, 3, 4)          //can be declared using new keyword
// console.log(myArr[1]);   //1  This is to access a element of array.

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)          //push an element at start index of array and thus, heavy operation as we have to shift rest all elements of array to right
// myArr.shift()             //pop an element from start of array 

// console.log(myArr.includes(9));   //javascript have some questionarie method like this // it will return boolean value (true if element is present in array)
// console.log(myArr.indexOf(3));    //returns index (a number type value) of given element 

// const newArr = myArr.join()

// console.log(myArr);   [0,1,2,3,4,5]
// console.log( newArr);  0,1,2,3,4,5  //So, join binds all elements of array ,comma seprated and returns a String value
//console.log(typeof newArr)   //string instead of object

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)      

console.log(myn1);    [1,2]
console.log("B ", myArr);  [0,1,2,3,4,5]       //slice does not manipulates original array


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); [1,2,3]
console.log(myn2);  [0,4,5]               //So, splice manipulates original array // So, it takes away (removes) portion of range from the original array.  
