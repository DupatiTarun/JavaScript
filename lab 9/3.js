//flat()
const num=[1,[2,[3,[5]]],6];
console.log(num);
const flatNums=num.flat(Infinity);
console.log(flatNums);

const some =[11,[12,[13,[14,["tarun"]]]],15];
const flatsome=some.flat(Infinity);
console.log(flatsome);


//indexOf :it returns first index of that value
//lastIndexOf: it returns last index of that value
const nums=[1,2,3,4,5,6,3,6,3,4];
console.log(nums.indexOf(3));
console.log(nums.lastIndexOf(6))
console.log(nums.indexOf(23));
console.log(nums.lastIndexOf(33))

const list=Array.of(100,"tarun",true,45000.50);
console.log(list);