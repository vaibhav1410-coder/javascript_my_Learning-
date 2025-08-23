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




// const a = "reverse";
// const b = "apple";
// console.log(a.localeCompare(b)); //1 or 2 depends on browser
// console.log(b.localeCompare(a)); //-1 or -2
// console.log(a.localeCompare(a));  //0 as "reverse" matches "reverse"

// const newString = "The fox is lazy. Dog barks"
// const regexp = /[A-Z]/g
// const found = newString.match(regexp);
// console.log(found);  //['T', 'D']

// const paragraph = "cat jumps over.The quick brown fox jumps over the lazy dog. It barked.";

// const capturingRegex = /(?<animal>fox|cat) jumps over/;
// const found = paragraph.match(capturingRegex);
// console.log(found.groups); // [Object: null prototype] {animal: "cat"}

//   const a ="how"
//   const b = "";
// console.log(a.match(b));

// const regexp = /t(e)(st(\d?))/g;
// const str = "test1test2test3";

// const array = [...str.matchAll(regexp)]

// console.log(array);
// console.log(array[0]);

// const name1 = "\u0041\u006d\u00e9\u006c\u0069\u0065";
// const name2 = "\u0041\u006d\u0065\u0301\u006c\u0069\u0065";

// console.log(`${name1} , ${name2}`);      //  Amélie , Amélie
// console.log(name1.length === name2.length); //false 
// console.log(name1 === name2);  //false

// const name1NFC = name1.normalize();
// const name2NFC = name2.normalize("NFC");
// console.log(`${name1} , ${name2}`);   //  Amélie , Améli
// console.log(name1NFC.length === name2NFC.length); //true
// console.log(name1NFC === name2NFC);  //true

// const name = "abc"
// console.log(name.padEnd(5,"."));

// const str = "5";

// console.log(str.padStart(3, 0));
// Expected output: "005"

// const fullNumber = "2034399002125581";
// const last4Digits = fullNumber.slice(-4);
// const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

// console.log(last4Digits); //5581
// console.log(maskedNumber);  // Expected output: "************5581"

// const mood = "happy! "
// console.log(`I feel ${mood.repeat(4)}`) //I feel happy! happy! happy! happy!

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replace("Ruth's", "my"));
// // Expected output: "I think my dog is cuter than your dog!"

// const regex = /dog/i;
// console.log(paragraph.replace(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your dog!"

// Note:-The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll("dog", "monkey"));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex = /dog/gi;
// console.log(paragraph.replaceAll(regex, "ferret"));
// // Expected output: "I think Ruth's ferret is cuter than your ferret!"

// const paragraph = "Your dog!";

// // Anything not a word character, whitespace or apostrophe
// const regex = /[^\w\s']/g;

// console.log(paragraph.search(regex));
// // Expected output: 8

// console.log(paragraph[paragraph.search(regex)]);
// // Expected output: "!"

// const str = "The quick brown fox jumps over the lazy dog.";
// console.log(str.slice(4));
// // Expected output: "quick brown fox jumps over the lazy dog."

// console.log(str.slice(-9, -5));
// // Expected output: "lazy"

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ",3);
// console.log(words); // [ 'The', 'quick', 'brown' ] as limit is 3 no. of substrings only

// const str = "Saturday night plans";

// console.log(str.startsWith("Sat"));
// // Expected output: true

// console.log(str.startsWith("Sat", 3));
// // Expected output: false

// const str = "Mozilla";

// console.log(str.substring(1, 3));
// // Expected output: "oz"

// console.log(str.substring(2));
// // Expected output: "zilla"

// const name = "vaibhav"
// console.log(name.substring(2,4)) //ib  as [startIndex,endIndex)

// const name = "VAibhav"

// console.log(name.toLocaleLowerCase())  //vaibhav

// const name = "vaibhav"
// console.log(name.toLocaleUpperCase()) //VAIBHAV

// const sentence = "The Quick Brown Fox Jumps Over The Lazy Dog.";
// console.log(sentence.toLowerCase());

// const stringObj = new String("foo");

// console.log(stringObj);
// // Expected output: String { "foo" }  

// console.log(stringObj.toString());  //gives string value
// // Expected output: "foo"

// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.toUpperCase());
// // Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."

// const illFormed = "https://example.com/search?q=\uD800";

// try {
//   encodeURI(illFormed);
// } catch (e) {
//   console.log(e); // URIError: URI malformed
// }

// console.log(encodeURI(illFormed.toWellFormed())); // "https://example.com/search?q=%EF%BF%BD"

// const str = "   foo  ";
// console.log(str.trim()); // 'foo'

// const greeting = "   Hello world!   ";

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trimEnd());
// // Expected output: "   Hello world!";

// console.log(greeting.trimRight())  //non standardized method

// const greeting = "   Hello world!   ";

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trimStart());
// // Expected output: "Hello world!   ";

// console.log(greeting.trimLeft())  //alias of trimStart()

// const stringObj = new String("foo");

// console.log(stringObj);
// // Expected output: String { "foo" }

// console.log(stringObj.valueOf());
// // Expected output: "foo"

// console.log(stringObj);

//  const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

// for (const v of str) {
//   console.log(v);
// }
// // "A"
// // "\uD835\uDC68"
// // "B"
// // "\uD835\uDC69"
// // "C"
// // "\uD835\uDC6A"

 const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";
 
const strIter = str[Symbol.iterator]() 

console.log(strIter);  //Object [String Iterator] {}
console.log(strIter.next());  //{ value: 'A', done: false }

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"










