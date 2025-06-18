//from() object to array
const fruits={0:'Apples',1:"Grapes",2:"FineApple"};
const temp={...fruits,length:Object.keys(fruits).length}
console.log(temp);
console.log(Object.keys(temp).length);
const fruitArray=Array.from(temp);
console.log(fruitArray);

const animal={ 1:"dog",2:"lion",3:"tiger"};
const some={...animal,length:Object.keys(animal).length}
console.log(some);
console.log(Object.keys(some).length);
const animalArray=Array.from(some);
console.log(animalArray);