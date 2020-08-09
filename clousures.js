// function multiplyBy (a) {
//   return function (b) {
//     return a * b;
//   }
// }

const multiplyBy = a => b => a * b; //Same than above
console.log(multiplyBy(10)(20));

const multiplyByFive = multiplyBy(5);
console.log(multiplyByFive(10));

function a () {
  let grandpa = "grandpa";
  return function b () {
    let dad = "dad";
    return function c () {
      console.log(`${grandpa}, ${dad}, me`);
    }
  }
}

let family = a()();
family();

const greeting = g => name => lastName =>{ 
  console.log(`${g} ${name} ${lastName}, Welcome!`);
} 
greeting("Hello")("Andres")("Ochoa");

const yay = () => name => age => `${name} ${age}`;
const yay2 = yay();
console.log(yay2("John")("Doe"));