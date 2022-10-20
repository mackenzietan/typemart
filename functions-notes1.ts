//JavaScript/TypeScript function basics


//Arrow function; standard in ES6 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//with two args
const sum = (param1, param2) => {
	return param1 + param2;
};
console.log(sum(1,3)); //prints 4

//with no args
const printHello = () => {
	console.log('hello');
};
printHello(); //prints "hello"

//with one arg
const checkStatus = status => {
	console.log(`Current status: ${status}.`);
};
checkStatus('human'); //prints "Current status: human."

//concise arrow function with two args
const multiply = (a,b) => a * b;
console.log(multiply(7,8)); //prints 56

/* there are other ways to define/create basic functions
but ill stick with these for now
the format is easier to remember especially when making more complex functions
*/

/* anonymous functions also exist
they are created in the same way as regular functions 
but without the declaration of a name
see below
*/
//anonymoous function
const dragCar = function() {
	return 'VROOM';
};


/*functions in TypeScript <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
there are three main concepts here:
- parameter type annotations
- optional parameters
- default parameters
*/

//consider the following function...
const playerDefenseStat0 = (name, defPoints, hasShield) => {
	if (hasShield === true) {
		defPoints = defPoints * 2;
		console.log(`Player ${name} has a shield eqipped. Defense has been doubled to ${defPoints}.`);		
	} else {
		console.log(`Player ${name}'s defense stat is ${defPoints}.`);
	}
}
playerDefenseStat0('mac',80,true);
/*we want to make sure that the player's name is a string
and that the defPoints param is a number
and that the hasShield param is a boolean value
so we would annotate the function declaration like so...
*/
const playerDefenseStat1 = (name: string, defPoints: number, hasShield: boolean) => {
	if (hasShield === true) {
		defPoints = defPoints * 2;
		console.log(`Player ${name} has a shield eqipped. Defense has been doubled to ${defPoints}.`);		
	} else {
		console.log(`Player ${name}'s defense stat is ${defPoints}.`);
	}
}
playerDefenseStat1('mac',80,false);
/* in this game the player will interact with a lot of people
but the player doesn't always know their names
so here's how we would handle the greet function without an npcName param
*/
const npcGreet = (npcName?: string) => {
	console.log(`Hello, ${ npcName || 'stranger'}.`);
}
npcGreet();
/*back to the first function
we want the hasShield param to default to false
so we would declare it like so...
*/
const playerDefenseStat2 = (name: string, defPoints: number, hasShield: boolean = false) => {
	if (hasShield === true) {
		defPoints = defPoints * 2;
		console.log(`Player ${name} has a shield eqipped. Defense has been doubled to ${defPoints}.`);		
	} else {
		console.log(`Player ${name}'s defense stat is ${defPoints}.`);
	}
}
playerDefenseStat2('mac',80);
