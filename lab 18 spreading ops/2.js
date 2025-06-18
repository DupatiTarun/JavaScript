//Object spread operators
//deep copy shallow copy

const person={
    id:1,
    name:"tarun",
    work:"police",
}
const details={
    town:"ongole",
   state:"AP",
   country:"indian"
}

const person_details={...person,...details};
console.log(person_details);

//const raju=person_details;//shallow copy
//const tarun={...person,...details};//deep copy
//console.log(tarun);
const raju=JSON.parse(JSON.stringify(person_details));
console.log(raju);

person_details["language"]="english";
console.log(person_details);

