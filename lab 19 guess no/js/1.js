let guess_numberElement=document.getElementById("guess_number");
let error_msgElement=document.getElementById("error_msg");
var gNumber=Math.ceil(Math.random()*100);
var count=0;


function vaildataGuessNumber()
{
    let inputElement=parseInt(guess_numberElement.value);
    if (gNumber==inputElement)
    {
        error_msgElement.innerHTML=`<h3>your guess number is correct(your typing ${count}time</h3>`;
        error_msgElement.style.color="blue";
    }
        else if (gNumber>inputElement)
                {
               error_msgElement.innerHTML=`<h3>your guess number is too low</h3>`;
              error_msgElement.style.color="gold";
            }
            else if(gNumber<inputElement)
            {
                error_msgElement.innerHTML=`<h3>your guess number is too high</h3>`;
        error_msgElement.style.color="gold";
            }
            else {
            alert("your input is wrong")
        error_msgElement.style.color="black";
        
        }
        count+=1;
    
}


