// singleton

// Object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "Akshit",
    age: 18,
    location: "Delhi",
    email:"akshittomar@google.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"],
    [mySym]: "mykey1",//Symbol key needs to be written in sq. bracket otherwise they'll be treated as string
    greet: function(){
        console.log(`Hello, ${this.name}!`)
    }, // Long Way
    play () {
        console.log("Hello")
    }, // Shorthand
    "Highest Scorer": true
}

// jsUser.greet("Akshit") // Calling a function that is inside object
// console.log(jsUser.email);// But we should use the way below to access, 1 step process. Directly checks and return.
// console.log(jsUser["email"]) //Another way for it, 2 step process. Things inside Bracket evaluate, then check and return. 
// console.log(jsUser[mySym])

let loc = "location"
// console.log(jsUser[loc]) // Prints Delhi since it will evaluate then check and return
// console.log(jsUser.loc) // Return Undefined since js shows no error, bcz it will directly check but there is no key as loc

jsUser.email = "tomersre@google.com"//Updates the information
// console.log(jsUser["email"])
// Object.freeze(jsUser)//Now no updation will happen.

jsUser.greeting = function() {
    console.log("Hello JS user")
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`) //this. refer to the scope in which it lies, in browser it is window and in node it is undefined
}

// jsUser.greeting2()
// jsUser["greeting2"]() // Calling function using [] approach.

// for (let x in jsUser){
//     console.log(jsUser[x])
// }

for (let x in jsUser){
    console.log(jsUser[x])
}

// delete jsUser["Highest Scorer"]