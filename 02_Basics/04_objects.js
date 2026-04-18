// const tinderUSer = new Object()  // SINGLETON

const tinderUser = // Non-Singleton
{
id: "123abc",
name: "Sam",
isLoggedIn: false
} 

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
          firstname: "Akshit",
          lastname: "Tomar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = Object.assign({}, obj1, obj2) // {} is the target which is emtpy, this merges the objects

// Other way
const obj3 = {...obj1, ...obj2} // Same as array ie spread
// console.log(obj3);


// When values come from database they're somewhat like this
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email // this is how we can access objects inside array

// console.log(tinderUser) // Gave info about tinderUser
// console.log(Object.keys(tinderUser)); // We got all the info and the data is in array datatype therefore can used in loops etc

// console.log(tinderUser.hasOwnProperty('isLoggedIn')) // True
// // This is used to check if datatype sent a info about this, as if it is not present it could crash the loop etc