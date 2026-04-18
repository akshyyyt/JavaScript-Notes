count = 0
let timer = setInterval(() => {
    console.log(count)
    count ++

    if (count == 3){
        clearInterval(timer)
    }
}, 1000)

// let timer2 = setTimeout(() => {
//     console.log("Hi")
// }, 1000)
// // clearTimeout(timer2)