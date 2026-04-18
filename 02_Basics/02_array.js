const marvel = ["Thor","Ironman","Spiderman"]
const DC =["Superman","Batman","Flash"]

// marvel.push(DC)
// console.log(marvel)// Arrays comes inside the array also push has heap memory

// const all = marvel.concat(DC)
// console.log(all) // Here elements are taken out from array amd added to first array, also changes are in stack memory

// Spread is best operator
const newAll = [...marvel, ...DC]
console.log(newAll) //Works same as concat but more efficient


// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const realAnotherArray = anotherArray.flat(1) // Flat takes element inside the array out
// console.log(realAnotherArray)