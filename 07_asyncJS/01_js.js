// function Data(){
//     return new Promise ((res, rej) => {
//         setTimeout(() => {
//             res(80)
//         }, 2000)
//     })
// }

// async function main(){
//     try {
//         let result = await Data()
//         console.log(result)
//     } catch (err) {
//         console.log(err)
//     }
// }
// main()


async function hie (){
    try {
        let api = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if (!api.ok){
            throw new Error("Request Failed: " + response.status)
        }
        let data = await api.json()
        console.log(data.username)
    } catch (error){
        console.log("Error")
    }
}
hie()