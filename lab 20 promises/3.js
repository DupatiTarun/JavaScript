//promise ALL
//WAITS for allpromise to resolve
const p1 =  Promise.reject(1);
const p2 =  Promise.resolve(2);
const p3 =  Promise.reject(3);

  Promise.all([p1,p2,p3])
.then (result=>console.log("ALL RESOLVED",result))
.catch(error=>console.error("one rejected",error));







