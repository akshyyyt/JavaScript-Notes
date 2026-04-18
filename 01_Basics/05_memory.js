// Stack (Primitive), Heap (Reference)

let myName = "Akshit"

let anotherName = myName;
anotherName = "Ravi"

console.log(myName);//Akshit
console.log(anotherName);//Ravi

/*
Here we can see that anotherName is Ravi and myName is still Akshit,
myName is not changed as it is (stack) one and the reference is not changed in this memory type
therefore this is called stack Memory
*/


// Here we're using Object datatype ie Reference therefore memory will be heap ie Reference will be changed

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "user2@google.com"

console.log(userTwo.email)//user2@google.com
console.log(userOne.email)//user2@google.com

/*
Therefore we can see when we changed email in userTwo, it automatically got changed in userOne as
here there is not stack and on changing info, the reference is also changed ie called heap.
*/