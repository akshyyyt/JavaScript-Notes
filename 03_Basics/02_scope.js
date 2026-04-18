// function one(){
//     const username = "Akshit"

//     function two(){
//         const website = "youtube"
//         console.log(username) // Can be accesed
//     }
//     // console.log(website) // Can't be accesed

//     two()
// }

// one() // Prints username since one call two inside it

// if (true){
//     const name = "Akshit"
//     if (name == "Akshit"){
//         const website = "Youtube"
//         console.log(name + website)
//     }
//     // console.log(website)// Can't be accesed
// }
// // console.log(name) // Can't be accesed

// addOne(5) // Can be accesed here too
function addOne(num){
    return num + 1
}
addOne(5)

// addTwo(5) // Can't be accesed // This way is called expression
const addTwo = (num) => {return num+2}
addTwo(5)

// When function is defined as expression it is not hoised but in traditional way it is hoisted
// Hoisted i.e. moves to the top of the global scope with value in case of function, but in the case of var, it is moved to the top but with value undefined
// If we try to acces let or const before initialising, we will get TDZ error