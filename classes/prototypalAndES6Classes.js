// //Prototypal way
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.greeting = function () {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// function Customer (firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);
  
//   this.phone = phone;
//   this.membership = membership;
// }

// Customer.prototype = Object.create(Person.prototype); //Inherit the person prototype methods

// Customer.prototype.constructor = Customer; //Make Customer.prototype return Customer

// Customer.prototype.greeting = function () {
//     return `Hello ${this.firstName} ${this.lastName}, welcome!!!. Your phone number is ${this.phone} and your membership is ${this.membership}`;
// }

// const customer1 = new Customer("Tom", "Smith", "555 555 5555", "standard");
// const person1 = new Person("John", "Connor");

// console.log(customer1.greeting());
// console.log(customer1);


//ES6 way

class Person {
  constructor (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting () {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }

  greeting () {
    return `Hello ${this.firstName} ${this.lastName}, welcome!!!. Your phone number is ${this.phone} and your membership is ${this.membership}`;
  }
}

const person1 = new Person("John", "Connor");
const customer1 = new Customer("Tom", "Smith", "555 555 5555", "standard");

console.log(person1.greeting());
console.log(customer1.greeting());
console.log(customer1);

