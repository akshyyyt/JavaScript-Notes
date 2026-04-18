for (let i = 1; i <= 10; i++){
    let element = i;
    // console.log(element)
}

// Break

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        // console.log(`Detected 5`)
        break
    }
    // console.log(`Value of i is ${i}`)
} // Moves out of the loop on a given condition

// Continue

for (let i = 1; i <= 20; i++) {
    if (i == 5){
        console.log(`Detected 5`)
        continue
    }
    console.log(`Value of i is ${i}`)
} // Continue skips the iterations

