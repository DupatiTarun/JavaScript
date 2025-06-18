//Promise.any
//Returns the first fulfilled promise (ignores rejections).
const p1=Promise.reject("error 1");
const p2=Promise.resolve("success");
const p3=Promise.reject("error 2");

Promise .any([p1,p2,p3])
.catch(error =>console.log("all rejrcted:",error))
.then(result =>console.log("any success:",result));