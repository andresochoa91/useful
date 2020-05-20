// //How do we fix this code

// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   }
// };
// const giveMeTheCharacterNOW = character.getCharacter;
 
// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't



// //Solution with bind
// const character = {
//   name: 'Simon',
//   getCharacter() {
//     return this.name;
//   }
// };
// const giveMeTheCharacterNOW = character.getCharacter.bind(character);
 
// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't


// Solution with arrow functions
const character = {
  name: 'Simon',
  getCharacter() {
    return () => this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter();
 
//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
