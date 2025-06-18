//pop(): it removes the last element of the array
const nums=[0,1,2,3,4,5,6,7];
console.log(nums);
nums.pop();
console.log(nums);

const some=[0,1,2,3,7,11,13];
some.pop();
console.log(some);



    //push() to push elements at end of the array
nums.push(8);
console.log(nums);

some .push(17);
console.log(some);

//unshift() to add the element at begining of the array
nums.unshift(0);
console.log(nums);

some .unshift(23);
console.log(some);



//shift() to removes the first element of the array
nums.shift();
console.log(nums);

some .shift();
console.log(some);


//shift() – Remove from the Start
can = [ "dog "," cat "," lion"];
can .shift();
console.log(can );

// push() – Add to the End
can = [ "dog "," cat "," lion"];
can .push("tiger" );
console.log(can );


//forEach()
var x=0;
nums.forEach((num)=>console.log(num));
nums.forEach((element)=>
	{
		x=x+element;
		console.log(x)
	});


