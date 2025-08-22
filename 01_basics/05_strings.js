const name = "vaibhav"   //String declared //behind the scenes, here , string is created using new keyword
const repoCount = 50

// console.log(name + repoCount + " Value");   //old way to concatenate strings . It is not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //Modern way to concatenate using `` and should be used . It is recommended.

const gameName = new String('vaibhav-vv-com')   //another way to declare a string

console.log(typeof name) // string
console.log(typeof gameName) //object (which is a String object)
console.log(gameName); // [String : vaibhav]  This object is having key:value pairs where key is index and value is character at that index

// console.log(gameName[0]);             //v
// console.log(gameName.__proto__);      //We can access prototype (that is a String type object) , of this String object named gameName 
//prototype is a {} object containing key:value pairs like function/method name : function/method.

// console.log(gameName.length);          // 7   //length is a property of String
// console.log(gameName.toUpperCase());   // UpperCase() is a method of String . We can directly access all methods of our String object. We dont need syntax like gameName.__proto__.toUpperCase()
console.log(gameName.charAt(2));      //i
console.log(gameName.indexOf('v'));  //0

const newString = gameName.substring(0, 4)
console.log(newString);  //vaib
console.log(gameName); // [String : 'vaibhav'] . So, string value is still vaibhav in gameName because String is primitive type and so, we get a copy of gameName and on it .substring() method is applied. Changes done on this copy of original string gameName (not on original gameName variable)

const anotherString = gameName.slice(-8, 4)  //returns aib   //So, here in slice() we can give -ve starting index
console.log(anotherString);  //aib

const newStringOne = "   vaibhav    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vaibhav.com/vaibhav%20results"

console.log(url.replace('%20', '-'))    // https://vaibhav.com/vaibhav-results

console.log(url.includes('sundar'))  //false

console.log(gameName.split('-')); //[ 'vaibhav' , 'vv' , 'com' ]


//**********************************************************************************************
//Did More Practice
const gameName = new String('vaibhav-cc-com');

// console.log(gameName)
// console.log(gameName[0]);
// console.log(gameName.length)
// console.log(gameName.__proto__) 
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('v'))

// console.log(gameName.substr(0,4))

// const anotherString = gameName.slice(-7,8)
// console.log(anotherString)
// console.log(gameName)

// const newStringOne = "      vaibhav    "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// const url = "https://vaibhav.com/vaibhav%20results"

// console.log(url.replace('%20','-'))
// console.log(url.includes('av'))
// const arr = gameName.split('-')
// console.log(arr)
// console.log(typeof arr)

// const newString ="Abcd"
// console.log(newString.charCodeAt(0))
//console.log(newString.codePointAt(0))


const newWord = "dog is barking.This dog should go somewhere";
console.log(newWord.lastIndexOf("dog")); //20

