// function outer(inner){
//     inner()
// }
// let inner = () => {
//     console.log("Hi")
// }
// outer(inner)

// It is called callback function

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
} // To much repetition so we use callback

function calculate(a, b, operation){
    return operation(a,b)
}

calculate(20, 30, (a,b) => a+b)


let arr = [10, 20, 30]

function area(arr){
    const output = []
    for (let i of arr){
        output.push(3.14 * i*i)
    }
    return output
}