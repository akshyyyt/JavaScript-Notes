const arr = [1, 2, 3, 4, 5]

// For of (used on all iterable things ie strings, object, array etc)
for (let i of arr){
    // console.log(i)
}

const name = "Akshit"
for (let char of name){
    // console.log(char)
}


// Maps (initerable)
const map = new Map()
map.set("India","IN")
map.set("United States of America", "US")
map.set("India","IN") // Won't count since map only have unique values and same order in which they're added

// console.log(map)

// To print key and value

for (let [key, value] of map){
    // console.log(key) // Prints key
    // console.log(value) // Prints value
} // This method doesn't work on Objects


// Object (for in loop)
const obj = {
    js: "JavaScript",
    cpp: "C++",
    py: "Python",
    rb: "Ruby"
}

for (let key in obj){
    // console.log(key) //Prints the key
}

for (let key in obj){
    // console.log(obj[key]) //Prints the value
}

// if we use (for in) loop in array we will get the index but if we use (for of) loop we'll get value, (for in) won't be used on map since it is interable


// FOR EACH LOOP
const coding = ["js", "ruby", "python", "cpp"]

coding.forEach(function (i){
    // console.log(i)
}) // We do not give function a name since it is a callback function and parameters and given by array in order

coding.forEach((value, index, arr) => {
    // console.log(value) // Prints Value
    // console.log(index) // Prints Index
    // console.log(arr) // Prints complete array
}) // Works same as the last one

// NEW

const myCoding = [
    {
        languageName: "JavaScript",
        languageFile: "js"
    },
    {
        languageName: "Java",
        languageFile: "java",
    },
    {
        languageName: "Python",
        languageFile: "py"
    }
] // 3 Objects inside array

myCoding.forEach( (item)=> {
    console.log(item["languageName"]) // Prints language name from all the objects inside array
})

// for each doesn't return any value so if you try to store the value inside variable and print it, it will show undefined