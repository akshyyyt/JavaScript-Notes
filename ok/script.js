let obj = {
    name: "Akshit",
    age: 19,
    email: "akshit@gmail",
    isStudent: true,
}

let h1 = document.createElement('h1')
h1.textContent = "Profile"
document.body.appendChild(h1)

// let name = document.createElement('h4')
// name.textContent = `Name: ${obj.name}`

// let age = document.createElement('h4')
// age.textContent = `Age: ${obj.age}`

// let email = document.createElement('h4')
// email.textContent = `Email: ${obj.email}`

// let isStudent = document.createElement('h4')
// isStudent.textContent = `isStudent: ${obj.isStudent}`

// document.body.appendChild(name)
// document.body.appendChild(age)
// document.body.appendChild(email)
// document.body.appendChild(isStudent)

let profileDiv = document.getElementById("profile")

for (let i in obj){
    let p = document.createElement("p")
    if (i == "isStudent"){
        p.textContent = `Status: ${obj[i] == true ? 'Student': "Working Professional"}`
    } else {
        p.textContent = `${i.charAt(0).toUpperCase()}${i.slice(1)}: ${obj[i]}`
    }
    profileDiv.appendChild(p)
}