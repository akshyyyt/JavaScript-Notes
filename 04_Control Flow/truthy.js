const UserEmail = "akshyyyt@gmail.com"

if (UserEmail){
    console.log("Got user Email")
} else {
    console.log("Don't have username")
}

// If false, 0, -0, BigInt 0n, "", null, undefined, NaN - it will give falsy value

// truthy value - "0", 'false', " ", [], {}, function(){}

// If array is empty we can check using length
if (UserEmail.length === 0){
    console.log("Array is empty")
}

const emptyObject = {}

if (Object.keys(emptyObject).length === 0){
    console.log("Empty object")
}

// Nullish coalescing Operator (??): Null or Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1)


// Terniary Operator 
// condition ? true : false

const iceTea = 1000
iceTea <= 80 ? console.log("Less than 80") : console.log("More than 80")