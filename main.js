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
// console.log(countWordOccurrences('hello riman roni riman bhai', 'riman'))
// Problem 4: 
