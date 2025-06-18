//promise race
//Returns the result of the first settled (resolved or rejected) promise.
const p1=new Promise (resolve=>setTimeout(()=>resolve("p1 done"),200));
const p2=new Promise(resolve=>setTimeout(()=>resolve("p2 happy"),50));


Promise.race([p1,p2])
.then(result=>console.log("RACE WINNER",result));

