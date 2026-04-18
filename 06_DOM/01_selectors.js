// console.log(document) gives the html and console.dir(document) gives all information

// getElementById()
// getElementByClassName()
// getElementById().getAttribute(class)
// getElementById().setAttribute("class", "test") // It overwrites


const title = document.getElementById("title")

title.style.backgroundColor = "red" // Makes title red
title.style.padding = "15px"
title.style.borderRadius = "15px"



// Adding content

// title.textContent // All the text that could not be visible due to css propertry or anything else
// title.innerText // Actually Visible
// title.innerHTML // Whole HTML is given


// Query Selectors

document.querySelector('h1') // Only first h1 of the page is given
document.querySelector('#title')
document.querySelector('.heading') 
// Same as css selectors

let myUl = document.querySelector('ul')
let myLi = document.querySelector('li')

myLi.style.backgroundColor = "green"
myLi.innerText = "Hello Ji"

// Query Selector All

const tempLi = document.querySelectorAll('li') // Gives Nodelist

tempLi.forEach((element) => element.style.color = "red" )


const lii = document.getElementByClassName('title') // Gives HTML collection

// Convert html collection to array
Array.from(lii)
