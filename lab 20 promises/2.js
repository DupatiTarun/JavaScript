//proimse chaining
function addOne(x){
    return new Promise(resolve=>resolve(x+1));
}
addOne(1)
.then (addOne)
.then (addOne)
.then(addOne)
.then(addOne)
.then(result=>console.log("final result:",result));
