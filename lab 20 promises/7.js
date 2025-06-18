//async/await for promise
function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve("fetched data!"),1000);
    });
}
async function loadData (){
    const data=await fetchData();
console.log(data);
}
loadData();



