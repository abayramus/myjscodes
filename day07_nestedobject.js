console.clear();
//NESTED OBJECT AND DESTRUCTURING
let car = {
  make : 'Tesla',
  color : 'red',
  maxSpeed : 300,
  price: {
    modelS:'$94,990',
    model3:'$44,990',
    modelX:'$106,190'
  }
}

console.log(car.make);//Tesla
console.log(car.price.modelS);//$94,990
//I can so traditional assignment and use modelS directly
let modelSS=car.price.modelS;
console.log(modelSS);//$94,990
let model33=car.price.model3;
console.log(model33);//"$44,990"

//We can simply destructe amd use modelS directly
//Destructuring Nested Object
let {make,color,maxspeed, price:{modelS,model3,modelX}} = car
console.log(make);//Tesla
console.log(modelS);//"$94,990"
