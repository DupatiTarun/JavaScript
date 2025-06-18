//basic promise
const myproimse =new Promise((reslove,reject)=>
{
    const success=false;
    if(success){
        reslove("promise resolved!");

    }else{
        reject("promise rejected");
    }

});
myproimse
.then(result=>console.log(result))
.catch(error=>console.error(error));

