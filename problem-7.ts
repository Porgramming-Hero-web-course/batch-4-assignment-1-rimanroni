// Problem 7 

class Car {
    constructor(
       public make:string,
       public model:string,
       public year:number 
   ){}
   getCarAge(){
       const currentYear = new Date().getFullYear();
       const carYear = this.year;
       const result = currentYear - carYear;
       console.log(`${result} (assuming current year is ${currentYear})`)
   }
}

const car = new Car("Honda", "Civic", 2018);
// car.getCarAge()