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
// Problem 3: 
function countWordOccurrences(sentence, word) {
    var sentenceLowerCase = sentence.toLowerCase();
    var wordLowerCase = word.toLowerCase();
    var sentenceSplit = sentenceLowerCase.split(' ');
    var result = sentenceSplit.filter(function (currentWord) { return currentWord === wordLowerCase; }).length;
    return result;
}
;
// create function type guards 
// ei khane input ke check kore nidi circle ki na 
function isCircle(input) {
    return input.shape === 'circle';
}
// create calculateShapeArea function 
// codition er vitore check krsi isCircle hole sei onu jai calculate hobe else hole rectangle  er calculate hobe 
function calculateShapeArea(input) {
    if (isCircle(input)) {
        // type judi circle hoi to 
        return Math.PI * input.radius * input.radius;
    }
    else {
        // input judi rectangle hoi to 
        return input.width * input.height;
    }
}
// check problem 4 
/*
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);

  */
//   Problem 5 
function getProperty(inputObj, key) {
    return inputObj[key];
}
var person = { name: "Arohim", age: 30 };
//  console.log(getProperty(person, "age")); 
