let GrossAmountElement=document.getElementById("GrossAmount");
let DisAmountElement=document.getElementById("DisAmount");
let AfterDisAmountElement=document.getElementById("AfterDisAmount");
let TaxElement=document.getElementById("Tax");
let AfterTaxAmtElement=document.getElementById("AfterTaxAmt");
let TipAmountElement=document.getElementById("TipAmount");
let NetBillAmtElement=document.getElementById("NetBillAmt");
let SplitBillElement=document.getElementById("SplitBill");
let EachBillAmountElement=document.getElementById("EachBillAmount");

function calcAfterDiscount()
{
 let afterDisAmt=parseInt(GrossAmountElement.value)-parseInt(DisAmountElement.value);
 AfterDisAmountElement.value=afterDisAmt;
}

function calcTaxAmt()
{
 let afterDisAmt=parseInt(AfterDisAmountElement.value); 
  let tax=parseInt(TaxElement.value);
  let taxAmt=(afterDisAmt*tax)/100;
  AfterTaxAmtElement.value=afterDisAmt+taxAmt;
  
}
function calcAfterTip()
{
  NetBillAmtElement.value=parseInt(AfterTaxAmtElement.value)+parseInt(TipAmountElement.value);
}

function calcEachBillAmt()
{
  EachBillAmountElement.value=Math.ceil(parseInt(NetBillAmtElement.value)/parseInt(SplitBillElement.value));
}