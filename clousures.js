// function multiplyBy (a) {
//   return function (b) {
//     return a * b;
//   }
// }

const multiplyBy = a => b => a * b; //Same than above
console.log(multiplyBy(10)(20));

//Using Partials
const multiply = (a, b, c) => a * b * c; //Same than above
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(5, 6)) 

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


//Memoization
const check = () => {
  const memo = {};
  return (number) => {
    if (!(number in memo)) {
      console.log("long")
      memo[number] = true
    } else {
      console.log("short")
    }
  } 
}

let checkFun = check();

checkFun(5)
checkFun(5)
checkFun(5)
checkFun(5)
checkFun(5)

////Encapsulation. This code works in the browser

// const makeNuclearButton = () => {
//   let timeWithoutDestruction = 0;
//   const passTime = () => timeWithoutDestruction++;
//   const totalPeaceTime = () => timeWithoutDestruction;
//   const launch = () => {
//     timeWithoutDestruction = -1;
//     return "boom";
//   }
//   setInterval(passTime, 1000);
//   return { 
//     totalPeaceTime: totalPeaceTime,
//     launch: launch
//   }
// }

// const ohno = makeNuclearButton();
// console.log(ohno.launch());

let arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  ((i) => setTimeout(() => {
    console.log("I'm at index " + i);
  }, 3000))(i);
}