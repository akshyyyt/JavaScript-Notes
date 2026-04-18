let arr = ["Batman", "Superman", "Wonder Women", "Flash"]

let twoWord = arr.filter((num) => {
    if (num.includes(" ")){
        return true
    }
})
// console.log(twoWord)


// SORTING

const arr2 = [2, 4, 1, 10, 20, 3]
// arr2.sort()
// console.log(arr2) // [ 1, 10, 2, 20, 3, 4 ]
// Sort was originally made for strings, so it sort numbers lexicographically. But it is HOF, so we can use callback to sort number given below.

arr2.sort((a,b) => { // here a is the second element and b is the first
    if (a<b) return -1;
    if (b<a) return 1;
    return 0
})
console.log(arr2)


let sortedArr = arr.sort((a,b) => {
    if (a.length < b.length) return -1
    if (a.length > b.length) return 1
    return 0
})
// console.log(sortedArr)



let arr4 = [
    {name: "Messi", goals: 800},
    {name: "Ronaldo", goals: 900},
    {name: "Bale", goals: 200},
    {name: "Lewandowski", goals: 700}
]

let sortedArr4 = arr4.sort((a,b) => {
    if (a.goals > b.goals) return -1
    if (a.goals < b.goals) return 1
})

// Shorthand
// arr4.sort((a,b) => a-b) // Does same thing
// console.log(sortedArr4)



let arr5 = [10, 20, 30, 40, 50]

let sortedArr5 = arr5.sort((a,b) => {
    if (a > b) return -1
    if (b > a) return 1
})
// console.log(sortedArr5)