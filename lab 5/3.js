let msg="hello student how are you"
console.log( msg.slice(5,15));
console.log(msg.slice(1,10));
console.log(msg.toLowerCase());
console.log(msg.toUpperCase());
console.log(msg.replace('o',"O"));
console.log(msg.replaceAll('o',"O"));

let some="   tarun    "
console.log(some);
console.log(some.trim());


//string+number
console.log("10"+5);
//numder+string
console.log(5+"10")
//string-number
console.log("10"-5)
//number-string
console.log(10-"5");
//string*number
console.log("10"*5);
//number*string
console.log(10*"5");
//number%string
console.log(10%"5");
//number/string
console.log(10/"5");
//sting/number
console.log("10"/5);

console.log(Number("10.5"));
console.log(parseInt("10.5"));
console.log(parseFloat("10.5"));


let a=45;
console.log(typeof(a.toString));
let isActive="true";
console.log(isActive, typeof(isActive.toString()));
let b="45.7";
console.log(Boolean(b));