//find
const nums=[1,2,3,4,5,6,7];
//const result=nums.find(( element)=>element>5);
//console.log(result);
const checkvalue= (element)=>element>3;
const result=nums.find(checkvalue);
console.log(result);




//includes
const nums1=[10,20,30,40,50,60];
const result1=nums1.includes(30);
console.log(result1);
 const result2=nums1.includes(0);
 console.log(result2);