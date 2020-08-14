// //In the browser

// const array = [];
// console.log(array.__proto__);

// function a () {}
// console.log(a.__proto__);
// console.log(a.__proto__.__proto__);

console.log(typeof Object) //It is a function because is the Object constructor
//Every function has its own prototype property. only functions have prototypes
console.log(Object.prototype) //This is the base object where we can look for properties
console.log(typeof {})

let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I'm ${this.name}, the breather of fire`; 
    }
  }
}

let lizard = {
  name: "kiki",
  fight() {
    return 1;
  }
}

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());

lizard.__proto__ = dragon; //this proto is just for learning, it SHOULDN'T be ever used. proto is always pointing to the prototype
console.log(lizard.sing());
console.log(lizard.fire);
console.log(lizard.fight());
console.log(lizard.name);
console.log(dragon.isPrototypeOf(lizard));

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop)
  }
}

Array.prototype.map = function () { //Altering existing map method. It shouldn't be done in real life 
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] + "map"))
  }
  return arr;
}
console.log([1, 2, 3].map());

