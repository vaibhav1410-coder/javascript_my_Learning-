const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)            //push whole array as a single element on the existing array (original array modifies here)  

// console.log(marvel_heros);             //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);        //flash

// const allHeros = marvel_heros.concat(dc_heros)     //returns a new array with both array's elements in it (without modifing actual existing array)
// console.log(allHeros);              // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
//console.log(marvel_heros);            // [ 'thor', 'ironman', 'spiderman' ]

const all_new_heros = [...marvel_heros, ...dc_heros]    //spread operator ... //It spreads/drops the array into its comma seperated elements //Mostly it is used to concat arrays
                                                         //because we can concat more than two in one go ,for example, [...a,...b,...cArray]
// console.log(all_new_heros);           //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)   //It converts this array inside array type Array to one Array having just simple elements.Well,We should give depth here. 
console.log(real_another_array);     //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]   //Actually depth in this case = 2



console.log(Array.isArray("Vaibhav"))    //false   //isArray is a static method determines whether the passed value is an Array.
console.log(Array.from("Vaibhav"))   //[  'V', 'a', 'i','b', 'h', 'a','v']     //converts whatever String or object or whatever to Array
console.log(Array.from({name: "vaibhav"})) // interesting  //Output: []     //because it does not know that whether convert it to keys array or elements array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //returns a new array having given set of elements(i.e. whatever elements : variables or arrays or whatever)
 // [100, 200, 300]


//..........
//console.log( Array.isArray(Array.prototype) );  //true  // Little known fact: Array.prototype itself is an array
// isArray() is a more robust alternative to instanceof Array because it avoids false positives and false negatives:
// Array.isArray() rejects values that aren't actual Array instances, even 
// if they have Array.prototype in their prototype chain — instanceof Array would accept these as it does check the prototype chain.
