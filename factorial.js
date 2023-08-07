function factorial(numbers){
    let result=1;
    let i=numbers;
    while(i>=1){
        result=result*i;
        console.log(i,result);
        i--;
    }
    return result
}
const numbers=9;
const fact=factorial(numbers);
var n=2;
var n2=4

function number(x){
    var square=x*x;
   console.log(square)
}
number(n);
number(n2)
