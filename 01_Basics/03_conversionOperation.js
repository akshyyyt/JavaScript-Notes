//*******************Conversions******************

let score = "33abc"
console.log(typeof score);//string

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//converted string to number

console.log(valueInNumber);//NaN, if we change score from 33 to 33abc

/*
This means in Js string will be converted into Number no matter what but the output
would be NaN if string have letter in it.
*/

// 33 => 33
// 33abc => NaN
// null => 0
// undefined => NaN