// Problem 1: 
function sumArray(input) {
    return input.reduce(function (accet, currentValue) { return accet + currentValue; }, 0);
}
;
//  console.log(sumArray([1,2,3,4,5, 10]))
// Problem 2:  
function removeDuplicates(input) {
    return input.filter(function (value, index) {
        return input.indexOf(value) === index;
    });
}
// console.log(removeDuplicates([2,2, 3, 3, 44, 44]));
