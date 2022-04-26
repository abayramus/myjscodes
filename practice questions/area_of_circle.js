/*
Get the radius of the circle from user 
and print the area of the circle on the console
()
  
*/


function areaCircle(radius){
    const pi = 3.14;
    return(pi*(radius**2));
  }
  
  
  let radius = prompt('Please enter the radius of hte circle');
  
  console.log('Area of the circle is '+areaCircle(radius));