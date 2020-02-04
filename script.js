//1. Variables: var const let

//2. alert("hello")

//3. prompt("hello")

//4. conditionals:

//if, else, else if

//Ex: 
/*
let a = 3;

if (a === 1) {
	alert("alert");
} else if (a === 2) {
	prompt("prompt");
} else {
	console.log("console.log");
}
*/

//Ternary operator
/*
let a = 4;

a === 3? console.log("3") : (a === 2? console.log("2") : console.log("another"))
*/

//Switch-case
/*
let a = 4;

switch (a) {
	case 3: 
		console.log("3");
		break;
	case 2: 
		console.log("2");
		break;
	default:
		console.log("Another result")	
}
*/

//5. Functions

//Function declaration:
/*
function sayHello() {
	console.log("Hello with function declaration")
}

sayHello()
*/

//Function expression:
/*
var sayBye = function() {
	console.log("Bye with function expression")
}
sayBye()
*/

/*
function multiply(a, b) {
	return a * b;
}

console.log(multiply(2, 4));
*/


//Arrow functions
/*
const multiply = (a, b) => {
	return a * b;
}

console.log(multiply(2, 4))
*/


/*
const v = (name, age) => {
	if(name && age) {
		console.log("Good");
	} else {
		console.log("Bad")
	}
}

v()
*/


//Closures
/*
const first = () => {
	const greet = "Hi";
	const second = () => {
		const name = "Bobby";
		console.log(greet, name);
	}
	second()
}

const newFunc = () => first();

newFunc()
*/


//Currying
/*
const curriedMultiply = (a) => (b = 1) => console.log(a * b);

curriedMultiply(3)(15)
*/


/*
const curriedMultiply = (a) => (b) => console.log(a * b);
const multiplyBy5 = curriedMultiply(5)

multiplyBy5(8)
*/


//Compose
/*
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
console.log(compose(sum, sum)(5));
*/



//6. Arrays
/*
const list = ["tiger", "lion", "bear"]

console.log(list)
*/

/*
var list2 = [
	["tiger", "lion", "bear"],
	[1, 2, 3],
	["one", "two", "three", [4, 5, 6]]
]

console.log(list2[2][3]);
*/


//7. Methods in arrays
/*
var numbers = [1, 2, 3, 4, 5];

//console.log(numbers.shift());
//console.log(numbers.pop());
//console.log(numbers.concat([6, 7]));
//console.log(numbers.push(6, 7));
//console.log(numbers.reverse());
//console.log(numbers.sort());
/*
const mapArray = numbers.map((num) => num * 2);
console.log(mapArray);
*/
/*
const filterArray = numbers.filter((num) => num > 2)
console.log(filterArray);
*/
/*
const reduceArray = numbers.reduce((a, num) => {
	return a * num
}, 2);

console.log(reduceArray);
*/


//8. Objects
/*
let user = {
	name: "John",
	age: 24,
	hobby: "football",
	isMarried: false
};

console.log(user.hobby)
*/

/*
var user =  {
	shout: function() {
		console.log("Aaaaahhhhh")
	}
};

user.shout()
*/

/*
let users = [
	{
		name: "Patrick",
		age: 25,
		hobby: "Soccer"
	},
	{
		name: "Peter",
		age: 26,
		hobby: "Baseball"
	},
	{
		name: "Sarah",
		age: 27,
		hobby: "Basketball"
	}		
]

console.log(users[2].hobby)
*/


//Object properties
/*
const name = "John";
const player = {
	[name]: "Is the name",
	[3 * 4]: "Is the number"
}

console.log(player)
*/

/*
const a = "John";
const b = true;
const c = {};

//const obj = {
//	a: a,
//	b: b,
//	c: c
//}

const obj = {a, b, c}

console.log(obj)
*/

/*
function player(name = "unknown", age = 0, country = "unknown") {
	console.log(`Name: ${name}, Age: ${age}, Country: ${country}`)
//Default argument
}

player()
//player("John", 20, "USA")
*/


//Reference type
/*
let obj1 = { greet: "Hello" };
let obj2 = obj1;
let obj3 = { greet: "Hello" };

console.log(obj1 === obj2);
console.log(obj1 === obj3);
*/


//Context
/*
const obj4 = {
	a: function() {
		console.log(this)
	}
}
console.log(obj4)
*/


//Object.keys

/*
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
}

console.log(Object.keys(obj));
*/

/*
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
}

Object.keys(obj).forEach((key, index) => {
	console.log(index, key, obj[key]);
})
*/


//Object.values

/*
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
}

console.log(Object.values(obj));
*/

/*
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
}

Object.values(obj).forEach((value) => {
	console.log(value);
})
*/


//Object.entries
/*
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
}

Object.entries(obj).forEach((value) => {
	console.log(value);
})
*/

/*
let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
}

Object.entries(obj).forEach((value) => {
	console.log(value[1] + " " + value[0].replace("username", ""));
})
*/

//9. Loops

//for
/*
for (let i = 0; i < 10; i++) {
	console.log(i)
}
*/

//while
/*
let c = 0;

while(c <= 9) {
	console.log(c);
	c++;
}
*/

//Do-while
/*
let c = 0;

do {
	console.log(c);
	c++;
} while(c < 10);
*/

//forEach
/*
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(i) {
	console.log(i);
})
*/


//10. Callbacks

/*
const add = (a, b) => {
	return a + b;
}

const sub = (a, b) => {
	return a - b;
}

const mul = (a, b) => {
	return a * b;
}

const div = (a, b) => {
	return a / b;
}

const op = (a, b, callback) => {
	return callback(a, b)	
}

console.log(op(4, 2, div))
*/


//11. Destructuring
/*
const player = {
	name: "John",
	age: 30,
	country: "USA",
}

//const name = player.name
//const age = player.age
//console.log(name, age);

const { name, age } = player;
console.log(name, age)
*/


//12. Interpolation
/*
var name = "John";
var animal = "Dog";
var petName = "Rick";

console.log(`${name} has a ${animal} called ${petName}.\nThat ${animal} is amazing.`)
*/


//13. Symbol
/*
let num1 = "sss";
let num2 = "sss";
let sym1 = Symbol();
let sym2 = Symbol();
let sym3 = Symbol("sss");
let sym4 = Symbol("sss");

console.log(num1 === num2);
console.log(sym1 === sym2);
console.log(sym3 === sym4);
*/


//14. Intantiation
/*
class Player {
	constructor(name, type) {
		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`I'm a ${this.type}. Ready for the action`);
	}
}

class Athlete extends Player {
	constructor(name, type) {
		super(name, type)
	}
	play() {
		console.log(`I'm a ${this.type}. Ready for the action`)
	}
}

const wizard1 = new Wizard ("Shelly", "Healer");
const wizard2 = new Wizard ("Shawn", "Darkmagician");
const athlete1 = new Athlete ("John", "Soccer Player")

wizard1.introduce();
wizard2.play();
athlete1.introduce();
athlete1.play();
*/


//15. Passing by value
/*
let a = 5;
let b = a;
b++;
console.log(a, b);
*/

//16. Passing by reference
/*
let obj1 = { name: "John", password: "123" };
let obj2 = obj1;
obj2.password = "easy";
console.log(obj1);
console.log(obj2);
*/

/*
let arr1 = ["John", 123];
let arr2 = arr1;
arr2[1] = "easy";
console.log(arr1);
console.log(arr2);
*/


//17. Useful methods

//Includes
/*
let word = "hello";
console.log(word.includes("llo"));
console.log(word.includes("elo"));
*/

/*
let arr = [1, 2, 3, "four", "five"];
console.log(arr.includes("four"));
console.log(arr.includes("fou"));
*/

//Exponential operator
/*
const square = (x) => x ** 2;
console.log(square(3));
*/

/*
const squareRoot = (x) => x ** (1 / 2)
console.log(squareRoot(16));
*/

//.padStart/.padEnd
/*
let w = "hello";
console.log(w.padStart(10) + " my friend");
console.log(w.padEnd(10) + " my friend");
*/

//replace
/*
let a = "hello"
console.log(a.replace("o", " yeah"));
*/


class Player {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Tennis extends Player {
	constructor(name, age) {
		super(name, age)
	}
	play = () => {
		console.log(this.name, this.age);	
	}
}

class DragonBoat extends Player {
	constructor(name, age) {
		super(name, age)
	}
	play = () => {
		console.log(this.name, this.age);	
	}
}

const dragonboat1 = new DragonBoat("Helena", 25);
const tennis1 = new Tennis("John", 26);

console.log(tennis1)
console.log(dragonboat1)