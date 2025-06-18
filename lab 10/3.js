//Object.keys(),Object.values()
const person={
    id:2000,
    name:'tarun',
    compay:"DVT enter prices pvt ",
};
console.log(Object.keys(person));
console.log(Object.values(person));
//map
Object.keys(person).map((element)=>console.log(element));
Object.values(person).map((element)=>console.log(element));


//filter
const nums=[ 1,2,3,4,5,6,7,8,9,1,0,11,12,13,14,15,16,17,18,];
const even=nums.filter((nums)=>nums%2==0);
const odd=nums.filter((nums)=>nums%2!=0);
console.log(even);
console.log(odd);
