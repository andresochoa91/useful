function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
}

function Customer (firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);
  
  this.phone = phone;
  this.membership = membership;
}

Customer.prototype = Object.create(Person.prototype); //Inherit the person prototype methods
Customer.prototype.constructor = Customer; //Make Customer.prototype return Customer

Customer.prototype.greeting = function () {
  return `Hello ${this.firstName} ${this.lastName}, welcome!!!`;
}

const customer1 = new Customer("Tom", "Smith", "555 555 5555", "standard");
const person1 = new Person("John", "Connor");

console.log(customer1.greeting());
console.log(customer1);