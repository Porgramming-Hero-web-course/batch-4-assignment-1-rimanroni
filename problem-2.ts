// Problem 2:  


function removeDuplicates(input:number[]):number[]{
    return input.filter((value, index)=>{
        return input.indexOf(value) === index;
    })
}


// console.log(removeDuplicates([2,2, 3, 3, 44, 44]));