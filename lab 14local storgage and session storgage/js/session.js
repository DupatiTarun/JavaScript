let nameElemen=document.getElementById("name");
let rollnoElement=document.getElementById("roll no");
function saveHandler(){

    sessionStorage.setItem("name",nameElemen.value);
    sessionStorage.setItem("roll no",rollnoElement.value);
    nameElemen.value="";
    rollnoElement.value="";
    nameElemen.focus();
}

function getHandler(){
    nameElemen.value=sessionStorage.getItem("name");
    rollnoElement.value=sessionStorage.getItem("roll no");
}
function clearHandler(){
    nameElemen.value="";
    rollnoElement.value="";
    nameElemen.focus();
}
function removeHandler(){
    sessionStorage.clear();
}