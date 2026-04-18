let api = fetch("https://api.adviceslip.com/advice")

// api.then((res) => res.json())
// .then((data) => console.log(data.slip.advice))


// async function f(){
//     return 8
// }

// f()
// .then((value) => console.log(value))

let p = Promise.reject(7)

async function getData(){
    try {
        let data = await p
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
getData()

