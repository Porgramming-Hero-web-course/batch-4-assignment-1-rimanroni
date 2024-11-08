// Problem 4: 

 
type Circle = {
    shape: 'circle'; 
    radius: number;
} 

type Rectangle = {
    shape: 'rectangle';  
    width: number;
    height: number;
}

 
function isCircle(input:Circle | Rectangle) {
    return input.shape === 'circle'
} 

 
function calculateShapeArea(input:Circle | Rectangle) : number{
    if(isCircle(input)){
       const result = Math.PI * input.radius * input.radius
        return parseFloat(result.toFixed(2)) ;
    }else{
       
        return input.width * input.height
    }
}
 


 
const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
console.log(circleArea);
const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
//   console.log(rectangleArea); 

 
