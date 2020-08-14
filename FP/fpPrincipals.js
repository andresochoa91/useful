//no side effects
//same input --> same output 

//The perfect function:
////1 tast
////Return statement
////Pure
////No shared state
////Immutable state
////Composable
////Predictable


//Idempotence: 

function notGood (num) {
  console.log(5); //even knowing it is not a pure function because it uses has contact with the outside world (console.log with the window object), it always return the same result
}

notGood(5);

//Imperative vs Declarative
//Imperative: Code that tells the machine what to do and how to do it
for (let i = 0; i < 1000; i++) {
  console.log(i)
}
//Declarative: Code that tells What to do and what should happens (we don't have to do give all the instructions)
[1, 2, 3].forEach(item => console.log(item));

//Immutability
function cloneArray (arr) {
  return [...arr]; //this is pure
}
let a = [1, 2, 3, 4];
cloneArray(a);

//Higher order functions: They make either taking functions as arguments, or return another function

const hof = () => () => 5;
console.log(hof()())

const hof2 = (fn) => fn(5);
console.log(hof2(a = (x) => x));

//Clousure
const closure = () => {
  let count = 0;
  return () => {
    // count++; //this modify our count
    return count; //As long as we don't modify state of data, we are using functional programming
  }
}
const increment = closure();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());

//Currying
const multiply = a => b => a * b;
multiplyBy5 = multiply(5);
console.log(multiplyBy5(20));


//Partial application: Partially apply a function
plartialMultiply = (a, b, c) => a * b * c;
partialMultiplyBy5 = plartialMultiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 3));


//Compose (composition)
const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const MultiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

console.log(MultiplyBy3AndAbsolute(-25));


//Pipe
const pipe = (f, g) => (data) => g(f(data)); //Same that compose, but order change
const multiplyBy3Pipe = (num) => num * 3;
const makePositivePipe = (num) => Math.abs(num);
const MultiplyBy3AndAbsolutePipe = pipe(multiplyBy3, makePositive);

console.log(MultiplyBy3AndAbsolutePipe(-25));


//Arity: Amount of parameters a function has. The less the better. Ex. the pipe above has arity of 2
