let myArray = [0, 1, 2, 3, 4, 5]
// console.log(myArray[1])// 1

// Array Methods

myArray.push(7)//add value in array
myArray.pop()//Removes the last value in array

myArray.unshift(18)// Add the value in the starting of array
myArray.shift()// Removes the starting value of array

// console.log(myArray.includes(10)) // Tells if element in present or not

const newArr = myArray.join()
// console.log(myArray) // Original arrays remains entacted
// console.log(newArr);// New array becomes string separted by coma


// SLice and splice

// console.log("A ", myArray)

// const myn1 = myArray.slice(1, 3)
// console.log("Slice" ,myn1) // End value not included in answer
// console.log("After Slice" ,myArray) // Original remains entacted

// const myn2 = myArray.splice(1,3)
// console.log("Splice ", myn2) // End value is included
// console.log("After splice ",myArray) // Original array only have the elements left that didn't went into splice

/* Therefore in slice range is not included and the parent array is also as it is but in
splice range is included and also the the values gone in splice gets removed from the parent array

we can say, Slice is Stack memory
while splice has Heap memory
*/

// myArray.splice(1,0,3)
// console.log(myArray)