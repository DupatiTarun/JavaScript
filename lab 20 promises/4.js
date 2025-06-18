//promise all settled
//Waits for all promises to finish, regardless of resolved/rejected.
const p1= Promise.resolve("success");
const p2=Promise.resolve("another success");
const p3=Promise.reject("error");
 Promise.allSettled([p1,p2,p3])
 .then(result=>console.log(result));

