const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = myNums.map((num) => num+10)

const newNum = myNums
                .map((num)=> num*10)
                .map((num) => num+1)
                .filter((num)=> num>= 40)
// This is chaining, output of one gets to the next one.
// console.log(newNum)

// Reduce
const arr1 = [1, 2, 3, 4]
const myTotal = arr1.reduce((total, current) => {
    return total + current
}, 0) // Last zero tells the initial value of total
// console.log(myTotal)

const shoppingCart = [
    {name: "Js Course",
    price: 2999,}
    ,
    {name: "Python Course",
    price: 3999,}
    ,
    {name: "React Course",
    price: 5999,}
    ,
    {name: "DSA Course",
    price: 2499,}
]

const total = shoppingCart.reduce((acc, item) => {
    return acc + item.price
},0)

console.log(total)