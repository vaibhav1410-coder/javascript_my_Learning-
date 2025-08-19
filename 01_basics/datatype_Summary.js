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
