/*//destruction
let a=[411,"tarun","MBA",7.2];
let [rollno, name,couse,pertage]=a;
console.log("rollno",rollno);
console.log("name",name);
console.log("couse",couse);
console.log("pertage",pertage)
 


b=[20,40,60];
// let [x,,y]=b
 //let [,x,y]=b;
 let [x,y,]=b;
 console.log("X",x);
 console.log("Y",y);


 //object destruction
 const person={id:1,"name":"tarun","roll":"software"};
 const {id,roll}=person;
 console.log("ID:",id);
 //console.log("Name:",name);
 console.log("Roll:",roll);*/

 const person={
    person_details:{
        id:1,
        name:"tarun",
        city:"ongole",
    },
    person_adders:{
        id:411,
        name:"tarun",
        city:"hyd",
    },
 };
 const {city}=person.person_adders;
 const {name}=person.person_adders;
 const {id}=person.person_adders;
 console.log("City",city);
console.log("Name",name);
console.log("ID",id);