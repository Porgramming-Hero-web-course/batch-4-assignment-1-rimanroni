// Problem 3: 

function countWordOccurrences(sentence:string, word:string):number{
    const sentenceLowerCase = sentence.toLowerCase();
    const wordLowerCase = word.toLowerCase();

    const sentenceSplit = sentenceLowerCase.split(' ');
    const result = sentenceSplit.filter(currentWord=>currentWord===wordLowerCase).length;
    return result;

};

// console.log(countWordOccurrences('hello riman roni riman bhai', 'riman'))

