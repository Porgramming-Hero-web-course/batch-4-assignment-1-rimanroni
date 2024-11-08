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





