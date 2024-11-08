 // Problem 1: 


 function sumArray(input:number[]):number{
    return input.reduce((accet, currentValue)=>accet+currentValue, 0)
 };


//  console.log(sumArray([1,2,3,4,5, 10]))



// Problem 2:  


function removeDuplicates(input:number[]):number[]{
    return input.filter((value, index)=>{
        return input.indexOf(value) === index;
    })
}


// console.log(removeDuplicates([2,2, 3, 3, 44, 44]));

// Problem 3: 

function countWordOccurrences(sentence:string, word:string):number{
    const sentenceLowerCase = sentence.toLowerCase();
    const wordLowerCase = word.toLowerCase();

    const sentenceSplit = sentenceLowerCase.split(' ');
    const result = sentenceSplit.filter(currentWord=>currentWord===wordLowerCase).length;
    return result;

};

// console.log(countWordOccurrences('hello riman roni riman bhai', 'riman'))


// Problem 4: 

// create type 
type Circle = {
    shape: 'circle'; 
    radius: number;
} 

type Rectangle = {
    shape: 'rectangle';  
    width: number;
    height: number;
}

// create function type guards 
// ei khane input ke check kore nidi circle ki na 
function isCircle(input:Circle | Rectangle) {
    return input.shape === 'circle'
} 

// create calculateShapeArea function 

// codition er vitore check krsi isCircle hole sei onu jai calculate hobe else hole rectangle  er calculate hobe 

function calculateShapeArea(input:Circle | Rectangle) : number{
    if(isCircle(input)){
        // type judi circle hoi to 
        return Math.PI * input.radius * input.radius;
    }else{
        // input judi rectangle hoi to 
        return input.width * input.height
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



