//Factory function

// const elfFunctions = {
//   attack() {
//     return "attack with " + this.weapon
//   }
// }

// function createElf (name, weapon) {
//   return {
//     name: name,
//     weapon: weapon,
//   }
// }

// const peter = createElf("Peter", "stones");
// peter.attack = elfFunctions.attack;
// console.log(peter.attack());
// const sam = createElf("Sam", "fire");
// sam.attack = elfFunctions.attack;
// console.log(sam.attack());


// //Using Object.create

// const elfFunctions = {
//   attack() {
//     return "attack with " + this.weapon
//   }
// }

// function createElf (name, weapon) {
//   let newElf = Object.create(elfFunctions);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const peter = createElf("Peter", "stones");
// console.log(peter.attack());
// const sam = createElf("Sam", "fire");
// console.log(sam.attack());


//Constructor functions

function Elf (name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () { //do not use arrow function in this prototypal inheritance
  return "attack with " + this.weapon;
}

Elf.prototype.build = function () {
  const self = this; //we need this because in building function, this belongs to the window object, not to Elf
  return (function building () {
    return self.name + " builds a house";
  })();
}

const peter = new Elf("Peter", "stones");
console.log(peter.attack());
const sam = new Elf("Sam", "fire");
console.log(sam.attack());
console.log(peter.build())
