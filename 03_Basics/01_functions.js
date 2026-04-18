// console.log("A");
// console.log("K");
// console.log("S");
// console.log("H");
// console.log("I");
// console.log("T");
// This will be hectic if we have to write it again and again so we use functions

function sayMyName (){
    console.log("A");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
} // Now I can call sayMyName function easily instead of writing whole thing again and again

// sayMyName() // Called the function

// function addTwoNumbers(number1, number2) {
//     console.log(number1+number2)
// } // Here nothing is returned only showing using console.log

function addTwoNumbers(number1, number2) {
    // let result = number1+number2
    // return result

    return number1+number2 // More concise
}

const result = addTwoNumbers(3,"4")
// console.log("Result:", result) 

function loginUserMessage(username){
    return `${username} just logged in`
}

// console.log(loginUserMessage("Akshit"))
// If someone doesn't enter the input, i'll show undefined instead of null

function calculateCartPrize(num1){
    return num1
} // Here we'll get cart prize for 1 item but won't get for whole cart

function ReturnMyCartPrize(...num1){
    return num1
}
// console.log(ReturnMyCartPrize(200, 400, 800))

const user = {
    username: "Akshit",
    email: "tomersre@okokmail.com",
    price: 1290,
    phone: 9800000021
}

function handleObject (anyObject){
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`);
}

// handleObject(user)

const myNewArray = [200, 300, 800]

function returnSecondValue (getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray))

function one(){
    const username = " Akshit"

    function two (){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    {
        console.log()
    }
}
const ok = "abc"

