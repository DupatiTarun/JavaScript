//if(2)
let msg =`"dupati ventaka  'tarun'kumar "raju""`
console.log(msg.length);
let result="";
let n=msg.length;
for (let i=0;i<n;i++)
{
    result=msg.charAt(n-(i+1));
}
console.log (msg);
console.log(msg.length)

for ( let i=n;i>=0;i--)
{
    result+=msg.charAt(i);
}
console.log(result);

