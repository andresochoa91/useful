//1. Variables: var const let

//2. alert("hello");
//// prompt("hello");
////console.log("hello");	

//3. Operators:
//let x = 4; 
////x++;
////++x;
////x--;
////--x;
////x += 2;
////x -= 2;
////x *= 2;
////x /= 2;
//console.log(x);

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


/*
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
*/


/*
function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(5));
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

/*
let obj = {
	My: "name",
	is: "Rudolf",
	the: "raindeer."
}

const christmas = (o) => {
	return Object.entries(o).map((value) => value.join(" ")).join(" ");
}

console.log(christmas(obj))
*/


//Object spread operator
/*
const animals = {
	tiger: 13,
	lion: 5,
	monkey: 2
};

const { tiger, ...rest } = animals;

console.log(tiger);
for(animal in rest) {
	console.log(rest[animal]);
};


const array = [1, 2, 3, 4, 5];

const sum = (a, b, c, d, e) => a + b + c + d + e ; 

console.log(sum(...array))
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


//for of
/*
const basket = ["apples", "oranges", "grapes"];

for(item of basket) {
	console.log(item);
}

for(item of "basket") {
	console.log(item);
}
*/


//for in
/*
const basket = ["apples", "oranges", "grapes"];

for(item in basket) {
	console.log(item);
}

const basket2 = {
	apples: 5, 
	oranges: 10, 
	grapes: 15
};

for(fruit in basket2) {
	console.log(fruit, basket2[fruit]);	
}
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

//Replace
/*
let a = "hello"
console.log(a.replace("o", " yeah"));
*/

//Trim

//console.log("     Hello     ".trim());


//Join
/*
console.log([1, 2, 3, 4]);
console.log([1, 2, 3, 4].join());
console.log([1, 2, 3, 4].join(""));
console.log([1, 2, 3, 4].join(" "));
console.log(["Hello", "Hey", "Hi"].join(""));
*/


//flat
/*
console.log([1, 2, 3, [4, 5, 6], "seven", "eight", [[[[["nine"], "ten"]]]]].flat(5))
console.log(["Tom", "Jerry" , , , , , "Snoopy"]);
console.log(["Tom", "Jerry" , , , , , "Snoopy"].flat(1));
*/


//flatMap
/*
const name = ["Tim", "Tom", "Peter", ["John", "Jane"]];
const family = "Vai";
const fullName = name.flatMap(user => `${user} ${family}`);
console.log(fullName);
*/


//trimStart

//console.log("    John".trimStart())


//trimEnd
/*
console.log("Tom     " + "Sawyer")
console.log("Tom     ".trimEnd() + " Sawyer")
*/


//Object.fromEntries()
/*
let user = [["Tam", 23], ["Tim", 24], ["Tom", 25]];
console.log(Object.fromEntries(user));
*/


//try catch
/*
try {
	console.log(2 + 2);
}catch {
	console.log("Error");
}

try {
	console.log(dos + 2);
}catch {
	console.log("Error");
}
*/


//setTimeout
/*
console.log("1");
setTimeout(() => {
	console.log("2");
}, 0)
console.log("3")
*/


//sort

//console.log(["P", "a", "r", "i", "s", 2, 1, " ", "."].sort())


//sort((a, b) => a - b)

//console.log([99, 1, 3, 4, 30, 5].sort((a, b) => a - b))


//charAt

//console.log("Hello".charAt(2))  


//Split

//console.log("Paris".split(""))


//typeof
/*
console.log(typeof "hello" === "string");
console.log(typeof 1 === "number");
console.log(typeof {1: "Hey"} === "object");
*/


//Array.isArray()

//console.log(Array.isArray([[1, 2, 3]]))


//splice()
/*
let arr = ["a", "b", "c", "d", "e"];
arr.splice(1, 1, "hello", "hi", "I'm happy");
console.log(arr)
arr.splice(1, (1, 2, 3), "b", "c", "d")
console.log(arr)
*/


//Math.round()
/*
console.log(Math.round(4.4));
console.log(Math.round(4.6));
*/


//Math.pow()
/*
console.log(Math.pow(8, 2));
console.log(Math.pow(3, 4));
*/


//Math.sqrt()

//console.log(Math.sqrt(64))


//Math.abs()
/*
console.log(Math.abs(4.4));
console.log(Math.abs(-4.4));
*/


//Math.ceil()
/*
console.log(Math.ceil(4.4));
console.log(Math.ceil(4.6))
*/


//Math.floor()
/*
console.log(Math.floor(4.4));
console.log(Math.floor(4.6));
*/


//Math.min/max
/*
console.log(Math.min(0, 150, 30, 20, -8));
console.log(Math.max(0, 150, 30, 20, -8));
*/


//Math.random()
/*
console.log(Math.random())
console.log(Math.round(Math.random() * 100))
*/

//.toFixed()
//console.log(32.03658.toFixed(2))

//.substring() & .substr()
/*
console.log("hello".substring(1, 3));
console.log("hello".substr(1, 3) + "\n");

console.log("hello everybody".substring(2, 0));
console.log("hello everybody".substr(2, 0) + "\n");

console.log("hello everybody".substring(3, 1));
console.log("hello everybody".substr(3, 1) + "\n");

console.log("hello everybody".substring(2, 2));
console.log("hello everybody".substr(2, 2));
*/


//.toString()
/*
let n = 365;

console.log(n) //natural number
console.log(n.toString()); //to string
console.log(n.toString(2)); //to string binary
console.log(n.toString(8)); //to string octal
console.log(n.toString(16)); //to string hexadecimal
*/


//parseInt()
/*
let a = "100"

console.log(a);
console.log(parseInt(a));
console.log(parseInt(a, 2));
console.log(parseInt(a, 8));
console.log(parseInt(a, 16));
console.log(parseInt("ff", 16));
*/


//console.time
/*
console.time("testing time");
let x = "Hello";
let y = "Bye";
console.log(x, y);
console.timeEnd("testing time")
*/


//.some
/*
let arr = [1, 2, 3, 4, 5];

arr.some(value => {
	console.log(value);
	return value > 3;
})



let arr2 = ["John", "Jane", "Jessica", "James"];

arr2.some(value => {
	if(value.includes("Ja")) {
		console.log(value);
	}
})
*/


//isNaN()
//console.log(isNaN("three"));



//.repeat();
//console.log("hello\n".repeat(5));


//Set
/*
let mySet = new Set([1, 2, 3, 4]);
mySet.add(5).add(6);
console.log(mySet.size);
console.log(mySet.has(6));
console.log(mySet);
*/


//Promises
/*
const promise = new Promise ((resolve, reject) => {
	if (true) {
		resolve("stuff worked");
	} else {
		reject("Error, it broke");
	}
});

promise.then(result => console.log(result));
*/
