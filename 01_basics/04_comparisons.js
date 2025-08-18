// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);  //true as string "2" gets automatically converted to 2 number
// console.log("02" > 1); 

//Make it a rule: It is Not good to compare different datatypes because the answer we get is not always predictable answer  

console.log(null > 0);     //false
console.log(null == 0);     //false
console.log(null >= 0);     //true

//We get such outputs here, because the reason is that an equality check == and comparisons <= >= < > work differently. Comparisons convert null to a number, treating it as 0.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

//undefined always gives =>  false with all comparisons . But again same rule: Not a good thing to compare different datatypes. 

// ===  strict check . It checks for not only data but also for its datatype. So it compares data and datatype

console.log("2" === 2);
