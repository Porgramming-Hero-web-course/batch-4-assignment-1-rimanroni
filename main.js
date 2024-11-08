// Problem 1: 
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// updateProfile name ekta function create krsi input hisabe userProfile and updateUser Profile name e 2 ta peramitar nicchi 
// 1 pera mitar er type Profile diye defiend kore dicchi second e Partial nisi Partial holo change korar somoi jei ta oi ta change korte parbo er jonno sob type ke na nilew hobe je kuno ekta nite parbo Profile theke 
function updateProfile(userProfile, updateUserProfile) {
    // userProfile and UpdateUserProfile ke ekta object er vitore Spread operator kore new object create kortechi 
    return __assign(__assign({}, userProfile), updateUserProfile);
}
;
var riman = { name: "riman roni", age: 19, email: "rimanroni100@gmail.com" };
var updateRiman = updateProfile(riman, { email: "rimanroni386@gmail.com" });
// console.log(updateRiman);
// Problem 7 
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getCarAge = function () {
        var currentYear = new Date().getFullYear();
        var carYear = this.year;
        var result = currentYear - carYear;
        console.log(result);
    };
    return Car;
}());
var car = new Car("Honda", "Civic", 2018);
// car.getCarAge();
