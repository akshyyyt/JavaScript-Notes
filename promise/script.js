let vaada = new Promise((resolve, reject) => {
    resolve("Pura kia Vaada")
    // reject("Dhoka")
})

// If resolved, use then()...then will execute only when vaada fullfiled
// vaada.then((value) => console.log(value)) // Value gives value of argument of resolve

// If rejected, use catch()...catch will execute only when vaada not fullfiled
// vaada.catch((value) => console.log(value)) // Value gives value of argument of reject

// After using resolved or reject, we will use finally()
// vaada.finally(() => console.log("Bhai, Bhai hota hai"))






let p = new Promise((resolve, reject) => {
    resolve(10)
})

let p2 = p.then((value) => value*2) // p2 is a promise now
p2.then((value) => value*3) // p2 becomes a promise...we use then...p2 will be resolved when we return something...the reutrned thing will
//  become value of next then()
// .then((value) => console.log(value))
// This is promise chaining

// .catch((err) => console.log(err)) // IF first rejected



let prom = new Promise((resolve, reject) => {
    setTimeout((() => {
        resolve("Food Ready")
    }),1000)
})

// console.log("Placing Order")
// prom.then((value) => console.log(value))
// console.log("Waiting") 





let score = 95
let ok = new Promise ((resolve,reject) => {
    if (score >= 95){
        resolve("Gift")
    } else {
    reject ("No Gift")
    }
})
// ok.then((value) => console.log(value))
// ok.catch((value) => console.log(value))


// question

let loanStatus = (credit) => {
    return  new Promise((resolve,reject) => {
    setTimeout(() => {
        if (credit > 700){
        resolve("Loan approved")
    } else {
        reject("Loan Rejected")
    }
    },1000)
})
}
loanStatus(800).then((value) => console.log(value))
.catch((value) => console.log(value))
.finally(() => console.log("Wow"))