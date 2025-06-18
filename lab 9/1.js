//copyWithin
let num=[1,2,3,4,5,6];
num.copyWithin(3,0,3);
console.log(num);


let some =[ 9,10,11,12,13,14,15,];
some.copyWithin(3,0,4);
console.log(some);


//concat
let odds=[1,3,5];
let evens=[2,4,6];
//let allnums=odds.concat(evens);
let allnums=evens.concat(odds);
// let allnums=[...odds,...evens];
console.log(odds);
console.log(evens);
console.log(allnums);