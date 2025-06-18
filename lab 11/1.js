console.log( "console is end & new console as being");

let age =25;
if (age <26)
    
    {

    console.info( `"your eligable govt 'job'"`);
    console.warn(`'your in near to the "boder"'`);
}
else{
    console.error( `'your "not "eligable'`);

}
const student=[
    { name:"tarun",age:25,job:"police"},
    {name:"raju",age:52,job:"asi"},
    {name:"arun",age:24,job:"software"},
];

console.table(student);
console.group("my data");
console.log("name:tarun");
console.log("city:ongole");
console.log("qulification:MBA");
console.groupEnd();

console.time();
setTimeout=(()=>{
    console.error("se time is out ");
    console.timeEnd();
},2000);