//Categories of Datatypes
//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;    //undefined

const id = Symbol('123')              //used to make unique a value
const anotherId = Symbol('123')

console.log(id === anotherId);   //false   because value were same but return values are different

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bidNumber);  //undefined
console.log(typeof outsideTemp); //object
console.log(typeof myFunction);  //function   //called as object function
//All non-primitive datatypes give object as return type and are of object datatype

//All primitive datatypes are call by value. And Non primitive are call by reference

// https://262.ecma-international.org/5.1/#sec-11.4.3

//************************************************************************************************8
//Types of Memory: 
// Stack (Primitive)  , Heap (Non Primitive)

//For Primitive datatypes, we have Stack memory, all primitive goes in Stack Memory. Similarly, all non-primitive goes in Heap memory.
//Whatever goes in heap, we get its reference, when we try to assign its value to some other variable.
//Whatever goes in stack, we get its copy of variable, when we try to assign its value to some other variable.

let name = "ravi";
let anotherName = name;

anotherName = "vaibhav";  //But only anotherName gets updated and name have same old value

console.log(name);           //ravi 
console.log(anotherName);   //vaibhav


let user1 = {
    email: "ravi@google.com",
    upi: "abc@ypi"
}

let user2 = user1;

user2.email = "vaibhav@google.com";

console.log(user1);      //user1 will also gets new updated value   //vaibhav@google.com
console.log(user2);      //vaibhav@google.com
