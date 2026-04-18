function outer1(){
    let count = 0
    return function (){
        count++
        console.log(count)
    }
}
// let y = outer1()
// y()
// y()




function outer(){
    let count = 0; //It memorizes this value inside inner function, this logic is called closure. This works when we use callback function.
    // ie. stored outer function inside a new variable.

    return {
        increament: function(){
            count++;
        },
        getCount: function(){
            console.log(count);
        }
    }
}

// let x = outer()
// x.increament()
// x.getCount()




function multiply(x){
    function inner(y){
        return x*y
    }
    return inner
}
const double = multiply(2)
// console.log(double(5))

const triple = multiply(3)
// console.log(triple(3))
// Inner function knows x just because of closure.


