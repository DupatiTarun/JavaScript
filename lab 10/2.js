const data=[200,"tarun" ,"ongole","revenu"];
console.log(data);
const obj=data.entries();
console.log( obj);
console.log( obj.next ().value);
console.log( obj.next().value);
console.log( obj.next().value);
console.log(obj.next().value);



//reduce,reduceRight
const some=[1,2,3,4,5,6,7,8,9,10];
const sumvalue=some.reduce((acc,curvalue)=>{
    return acc+(curvalue*2);
})
console.log(sumvalue);

const some1=[1,2,3,4,5,6,7,8,9,10];
const sumvalue1=some.reduceRight((acc,curvalue)=>{
    return acc-(curvalue*1);
})
console.log(sumvalue1);



//isarray
const name='tarun';
//console.log(Array.isArray());
console.log(Array.isArray(name));
