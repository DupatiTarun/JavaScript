//spearding ops
let a=[1,2,3,5,6];
let b=[7,8,9,10];
let d=a;//shallow copy
let e=[...a];
//let c=a.concat(b);
let c=[...a,...b];
console.log(a);
console.log(c);
console.log(d);
a.push(11);
console.log(a);


