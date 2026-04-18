const accountId = 14432 //Constant
let accountEmail = "akshit@gmail.com" //Variable (More Used) as it has defined scope in between {} which help in less chance of bugs
var accountPassword = "1234567" //Variable (Less used)
accountCity = "Jaipur"// Not suggested to do
let accountState;//undefined

//accountId = 2 //Not possible since it's constant
accountEmail = "okok@gmail.com" //changed
accountPassword = "234130" //changed
accountCity = "Bengaluru" //changed

/*
Prefer to use let instead of var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])