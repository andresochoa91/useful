// let value = 5;

// function addFive(n) {
//   return n + 5;
// }

// function double(n) {
//   return n * 2;
// }

// function finalValue(n) {
//   console.log(`Your final value is ${n}`)
// }

// const mathPromise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     if (typeof value === "number") {
//       resolve(5);
//     } else {
//       reject(Error("Fucking error"))
//     }
//   }, 2000)
// });

// mathPromise
//   .then(addFive)
//   .then(double)
//   .then(finalValue)
//   .catch(err => console.log(err) );


let value = 3;

function addFive(n) {
  return n + 5;
}

function double(n) {
  return n * 2;
}

function finalValue(n) {
  return (`Your final value is ${n}`)
}

const math = (v, callback) => {
  return callback(v); 
}

const cb = (v) => {
  debugger
  return math(addFive(v), (val) => {
    return math(double(val), (val2) => {
      return math(val2, finalValue);
    })
  })
}

console.log(cb(value));










// //Given the object obj, return the key that contains the larger average of numbers inside the array

// let obj = {
//   first: [10, 20, 30],  //20
//   second: [5, 10, 15, 20],  //12.5 
//   third: [0, 2, 4, 6, 8]  //4
// }

// //return first
