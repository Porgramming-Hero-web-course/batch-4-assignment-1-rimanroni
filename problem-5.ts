//   Problem 5 

function getProperty<T,K extends keyof T>(inputObj:T, key:K){
    return inputObj[key]

 }


 const person = { name: "Arohim", age: 30 };
//  console.log(getProperty(person, "age")); 