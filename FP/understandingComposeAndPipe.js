const compose = (f, g) => (...args) => f(g(...args)); 
const pipe = (f, g) => (...args) => g(f(...args)); 

function one (name, mes) {
  return `Hello ${name}, ${mes}!`;
}

function two (mes) {
  return mes + ", how are you?";
}

function three (mes) {
  return mes + ". Nice to meet you!";
}

function four (mes) {
  return mes + " yay!";
}

function five (mes) {
  return mes + " :D";
}

function first (...fns) {
  return fns.reduce(compose)
}

function second (...fns) {
  return fns.reduce(pipe)
}

console.log(first(five, four, three, two, one)("Andres", "welcome"))
console.log(second(one, two, three, four, five)("Andres", "welcome"))

// console.log([five, four, three, two, one].reduce(pipe)("Andres", "welcome"))