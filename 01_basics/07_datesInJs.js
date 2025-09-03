// Dates

let myDate = new Date()
//console.log(myDate)                     //2025-09-03T13:42:56.890Z
// console.log(myDate.toString());        //Wed Sep 03 2025 13:45:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());    // Wed Sep 03 2025
// console.log(myDate.toLocaleString());  // 9/3/2025, 1:42:56 PM
// console.log(typeof myDate);        //object

let date = new Date();

console.log(date.toJSON())            //2025-09-03T15:36:30.148Z
console.log(date.toISOString())       //2025-09-03T15:38:57.860Z 

console.log(myDate.toLocaleDateString())  //9/3/2025
console.log(myDate.toLocaleTimeString())  //1:49:49 PM


// let myCreatedDate = new Date(2023, 0, 23)             //created our date
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)       //created our date and time from this Date Object
//console.log(myCreatedDate.toLocaleString())           // 1/23/2023, 5:03:00 AM  


// let myCreatedDate = new Date("2023-01-14")         //created yy-mm-dd format date
// console.log(myCreatedDate.toLocaleString());       //1/14/2023, 12:00:00 AM
let myCreatedDate = new Date("01-14-2023")            //created mm-dd-yy format date
// console.log(myCreatedDate.toLocaleString());       //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);           //1756908778545   //This is time in milliseconds of now from Fixed Start Date 1 Jan 1970
// console.log(myCreatedDate.getTime());  //1673654400000    //for comparing Time, this milliseconds time from Fixed Start Date of ECMAScript must be compared
// console.log(Math.floor(Date.now()/1000)); //To convert time in milliseconds to seconds, use Math.floor or Math.round but not use Math.ceil  //1756909295 

let newDate = new Date()
console.log(newDate);                   //2025-09-03T14:23:54.183Z
console.log(newDate.getMonth() + 1);    //9          //So, when we want to have some infomation and dont want to convert it to String, we can use functions like getMonth()
console.log(newDate.getDay());          //3  //Here 3 means wednesday So, 1 is monday
console.log(newDate.getYear() + 1900)     //2025   otherwise, 125 

// `${newDate.getDay()} and the time `        //3 and the time   //to show complex dates like this, we use string Interpolation like this
//console.log(`${newDate.getDay()} and the time `)

newDate.toLocaleString('default', {
    weekday: "long",
    
})                        //So in this important function, first argument is what Internalization you want to give and in second argument, we can define object that you want

// console.log(newDate.toLocaleString('default'));     // 9/3/2025, 2:41:31 PM  
//console.log(newDate.toLocaleString('default',{weekday: "long"}) );    // Wednesday
