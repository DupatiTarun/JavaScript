let grossamountElement=document.getElementById("grossamount");
let discountamountElement=document.getElementById("discountamount");
let afterdiscountamountElement=document.getElementById("afterdiscountamount");
let taxElement=document.getElementById("tax");
let aftertaxamountElement=document.getElementById("aftertaxamount");
let tipamountElement=document.getElementById("tipamount");
let netbillamountElement=document.getElementById("netbillamount");
let spiltElement=document.getElementById("spilt");
let eachpersonamountElement=document.getElementById("eachpersonamount");


function calcafterdiscount(){
    let afterDisamt=parseInt(grossamountElement.value)-parseInt(discountamountElement.value);
    afterdiscountamountElement.value=afterDisamt;
}

function calcaftertaxamount( ){
afterDisamt=parseInt(afterdiscountamountElement.value);
let tax=parseInt(taxElement.value);
let taxAmt=(afterDisamt*tax)/100;
aftertaxamountElement.value=afterDisamt+taxAmt;
}


function calcaftertip(){
    netbillamountElement.value=parseInt(aftertaxamountElement.value)+parseInt(tipamountElement.value);
}


function calceachpersonamount(){
let spiltElement=document.getElementById("spilt");
    eachpersonamountElement.value=Math.ceil(parseInt(netbillamountElement.value)/parseInt(spiltElement.value));
}