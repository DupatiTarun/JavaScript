let nameElemen=document.getElementById("name");
let rollnoElement=document.getElementById("roll no");
function saveHandler(){

    localStorage.setItem("name",nameElemen.value);
    localStorage.setItem("roll no",rollnoElement.value);
    nameElemen.value="";
    rollnoElement.value="";
    nameElemen.focus();
}

function getHandler(){
    nameElemen.value=localStorage.getItem("name");
    rollnoElement.value=localStorage.getItem("roll no");
}
function clearHandler(){
    nameElemen.value="";
    rollnoElement.value="";
    nameElemen.focus();
}
function removeHandler(){
    localStorage.clear();
}