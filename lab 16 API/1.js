let api_dataElement=document.getElementById("api_data");
const BAES_URL="https://jsonplaceholder.typicode.com/posts";
let result=`<table id="customer"><tr><th>userId</th><th>Id</th><th>tittle</th><th>body</th></tr>`;
let api_data;
const fetchData= async()=>{
    api_data=await fetch(BAES_URL)
    .then((response)=>response.json())
    .then((data)=>data);
    api_data.map(
        (element) =>
            (result=result +`<tr><td>${element.userId}</td><td>${element.Id}</td><td>${element.tittle}</td><td>${element.body}</td></tr>`)
    );
    console.log(api_data);
    result=result+`</table>`;
  api_dataElement.innerHTML=result;

};
fetchData();

