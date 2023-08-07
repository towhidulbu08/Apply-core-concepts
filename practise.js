// function inchesToFeet(inches){
//     var result=inches/12;
//     return result;
// }
// var input=72;
// var feet=inchesToFeet(input)
// console.log('feet -->',feet)

// function milesToKm(mile){
//     var km=1.6*mile;
//     return km;
// }
// var inputMiles=1050;
// var result=milesToKm(inputMiles)
//console.log(result)
// var num=20;
// for(var i=1;i<=num; i++){
//     if(i%2===0){
//         console.log(i,true)
//     }
//     else{
//         console.log(i, false)
//     }
// }
//.return new array of leap year
function isLeapYear(array){
    if(!Array.isArray(array)){
        return "Please give an array";
    }
    for(var x of array){
        if(typeof x!=='number'){
            return 'Please give an array of number'
        }
    }
    let arrayOfLeapYear=[]
    for(let number of array){
        if((number%4==0 && number%100!==0)||(number%400==0)){
         var add=arrayOfLeapYear.push(number)
        }
    }
    return arrayOfLeapYear
}
const numbers=[2000,20041800,2024,2025,2028,2030]
const result=isLeapYear(numbers)
console.log(result);