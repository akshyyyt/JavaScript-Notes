// Dates

let myDate = new Date()
// console.log(myDate); // We're getting a weird answer therefore we convert to string

// console.log(myDate.toString());//answer gets much better
// console.log(myDate.toDateString())//GIves only the date
// console.log(myDate.toTimeString());//Gives only the time

// console.log(typeof myDate);//Object

let myCreatedDate = new Date(2023, 0, 23, 5, 3, 27)//Therefore month starts from 0
// console.log(myCreatedDate.toLocaleString());

//another way of defining a date
let okDate = new Date("12-01-2021")
// console.log(okDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)// Answer in milisecond
//for answer in second
// console.log(Math.floor(myTimeStamp/1000))