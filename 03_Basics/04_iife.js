// Immediately invoked function expression (IIFE)

// function chai(){
//     console.log("Connected")
// }
// chai() // But here it could be polluted by global variable

// To save it from pollution we can call function immediately, we can call it IIFE

(function chai(){
    console.log("Akshit")
})(); // these paranthesis calls the function immediately