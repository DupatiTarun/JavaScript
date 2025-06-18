//splice()
const nums=[1,2,3,4,5,6];
//array.splice(startpostion,deletedcount,add1,add2,..)
//nums.splice(2,2,9,99,199,299);
nums.splice(1,nums.length-2,"Ram","Sita","Kishna");
console.log(nums);


//Remove Elements
let colors = ['red', 'green', 'blue', 'yellow'];
colors.splice(1, 2); // start at index 1, remove 2 elements
console.log(colors); // ['red', 'yellow']


//Add Elements
let some = ['red', 'yellow'];
some.splice(1, 0, 'green', 'blue'); // start at index 1, remove 0, add 'green' and 'blue'
console.log(some); // ['red', 'green', 'blue', 'yellow']

//Replace Elements
let can = ['red', 'green', 'blue'];
can.splice(1, 1, 'purple'); // replace 1 element at index 1 with 'purple'
console.log(can); // ['red', 'purple', 'blue']
