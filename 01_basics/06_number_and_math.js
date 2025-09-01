const score = 400           //automatically detects it is a number
// console.log(score);        

const balance = new Number(100)    //explicitly telling that it is a number datatype
// console.log(balance);  //[Number: 100]  because we defined a new object of type number and ofcourse it is 100

//console.log(balance.toString())   //100
// console.log(balance.toString().length);    //Number can be converted to a String using toString() and then we can use all properties and methods of string 
// console.log(balance.toFixed(1)); //100.0    //So, round-off to 1 decimal places

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //gives a precise value but focus on 4 places of whole number before . also //So, we need to be careful with this function
//console.log(otherNumber.toPrecision(3);     //124
//console.log(otherNumber.toPrecision(2);     //1.2e+2  //So be careful with this function while using it to focus on digits before .

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   //10,00,000   //string is in Indian standards number representation instead of US(default) (1,000,000)

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));   //topmost value always after round off 
// console.log(Math.floor(4.9));  //bottom value always after round off 
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());              // any random value Between 0 to 1 values including 0 and 1 
console.log((Math.random()*10) + 1);          // Multiplied 10 to have any random value btw 0 to 10(inclusive) but added 1 to avoid 0 value
console.log(Math.floor(Math.random()*10) + 1);  // floor() to have any random value btw 0 to 10(inclusive) but added 1 to avoid 0 value . 
//floor() is needed for getting single digit always.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)   //to have random value btw range of numbers from min=10 to max=20 , we oviously multiply random() to max-min and 
//added 1 to avoid 0 value but min also needed to be added otherwise we get range from (0-9 avoiding 0 value).
