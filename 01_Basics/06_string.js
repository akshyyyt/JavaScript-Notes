const name = "Akshit_ok"
const repoCount = 50

//console.log(name + repoCount + " " + "Dollar") // This is old way (Not reccomended)

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`) //Mordern way

// console.log(name.length)//Shows the length of string
// console.log(name[0])// Letter at this position
// console.log(name.toUpperCase())// This doesn't change name to Upper originally as it is Primitive datatype
// console.log(name.charAt(2))// Shows the char at that position
// console.log(name.indexOf('h'))// Shows position of the char

const newString = name.substring(0, 4) // Can't give negative value in substring
// console.log(newString)// Aksh

const anotherString = name.slice(-5, 4) // Can give negative value in slice and will start from last
// console.log(anotherString)// ksh

const anotherNewString = "        Akshit         "
// console.log(anotherNewString)
// console.log(anotherNewString.trim()) // trims the extra spaces

const url = "https://akshit.com/akshit%20tomar"
// console.log(url.replace('%20', '_'))

// console.log(name.split('_')) // Forms an array