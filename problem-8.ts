// Problem 8 

function validateKeys<T>(obj: T, keys: (keyof T)[]):boolean{
    for(let key of keys){
       if(!(key in obj)){
        return false 
       }
    }
    return true
}


const persons = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(persons, ["name", "age",]));