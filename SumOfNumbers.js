function sumOfNumbers(numbers){
    let sum=0;
    for(var i=1;i<=numbers;i++){
        sum+=i;
        console.log(i,sum)
    }
    return sum;
}
var value=10
var result=sumOfNumbers(value)
console.log(result)