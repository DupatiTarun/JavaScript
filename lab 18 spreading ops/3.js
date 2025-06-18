function sum(a,...rest)
{
    let total=a;
    for(let i=0;i<rest.length;i++)
    {
        total+=rest[i];
    }
    return(total);
}
console.log(sum(45,56,67));
console.log(sum(25,35,45,55));



function sum(b,c,...rest)
{
    let total=b+c;
    for (let i=0;i<rest.length;i++)
    {
        total+=rest[i];
    }
    return(total);
}
console.log(sum (10,20,30,40));


