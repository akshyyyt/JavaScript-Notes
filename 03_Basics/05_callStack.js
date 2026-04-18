function one(){
    console.log("one")
    two() // Call stacking, first two will be printed
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one() // this is call stacking