fetch("https://api.coinlore.net/api/ticke") // Pending promise
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)//real data
    })
    .catch(() => console.log("Oops"))