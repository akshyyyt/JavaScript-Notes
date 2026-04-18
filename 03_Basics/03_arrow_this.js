// const user = {
//     username: "Akshit",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to website`) // Here this is current object
//         console.log(this) // This will print whole object
//     }
// }

// user.welcomeMessage()
// console.log(this)// Here it will be empty object since there is no object...in browser global object is WINDOW

// function chai(){
//     let username = "Akshit"
//     console.log(this.username) // Inside a function it is showing undefined
// }
// chai()

// const chai = () => {
//     let username = "Akshit"
//     console.log(this); // Here also undefined ie empty object
// }


// const addTwo = (num1, num2) => {
//     return num1 + num2 
// }

// const addTwo = (num1,num2) => (num1+num2) // another way
// console.log(addTwo(5,2))

// To return a object
// const addtwo = (num1,num2) => ({username: "akshit"})
// console.log(addtwo(2,3)) //Return object

const array = [2, 5, 3, 8]
array.foreach(() => {})

// If we do not open the scope then we can just write the funciton and it will return the value iteseld but if scope is opened then we have to use return keyword