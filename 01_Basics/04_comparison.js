console.log("2">1);
console.log("02">1);
//It is changing the datatypes automatically but it's not prefferable to compare in different data types

console.log(null>0);// False
console.log(null==0);// == doesn't change string to number therefore false
console.log(null<=0);// True

// ===, strictly check which means it also wants same data types and won't change the datatype itself

console.log("2"==2)//True since datatype automatically changed
console.log("2"===2)//False since datatyped not automatically changed