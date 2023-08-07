function factorial(number) {
    let multiple = 1;
    for (var i = number; i >= 1; i--) {
        multiple *= i;
        //console.log(i, multiple)
    }
    return multiple

}


function factorialInWhileLoop(number) {
    let multiple=1;
    let i=number;
    while(i>=1){
        multiple*=i;
        console.log(i,multiple)
        i--
    }
    return multiple;
}
var parameter=10;
var result=factorialInWhileLoop(parameter)
console.log(result)





var value = 10;
var result = factorial(value)
//console.log(result)