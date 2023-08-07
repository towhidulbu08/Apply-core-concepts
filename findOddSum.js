function getOddSum(numbers) {
    //validation part-bonus mark

    if (!Array.isArray(numbers)) {
        console.log("not an array")
    }
    else {
        for (var x of numbers) {
            if (typeof x !== 'number') {
                console.log('please give an array of numbers')
            }
        }
    }
    let sum=0;
    for(var x of numbers){
        if(x%2==1){
           sum+=x;
           
        }
    }
    return sum;

}
const array = [12, 65, 45, 78, 32, 45, 91,]
const result = getOddSum(array)
console.log(result);
