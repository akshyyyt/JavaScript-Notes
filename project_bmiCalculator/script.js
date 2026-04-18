let form = document.querySelector("#main")

form.addEventListener('submit', (event) => {
    event.preventDefault()
    
    let bmi = document.querySelector('#bmi')

    let weight = document.querySelector('#weight').value
    let height = document.querySelector('#height').value
    let age = document.querySelector('#age').value
    let gender = document.querySelector('#gender').value

    let ans = weight/(height*height)

    bmi.appendChild(document.createTextNode(`Your BMI is ${ans}`))
})
