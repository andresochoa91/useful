class Person {
  constructor (name, age, country){
    this.name = name;
    this.age = age;
    this.country = country;
  }

  get activity () {
    const today = new Date();
    const hour = today.getHours;

    if (hour > 8 && hour <= 20) {
      return "coding";
    } else {
      return "watching tv";
    }
  }

  get school () {
    return this._school;
  }

  set school (school) { //Provide direct property access and the flexibility of a method
    if (this.age >= 18) {
      this._school = school;
      console.log("school: " + school)
    } else {
      this._school = "On waiting list";
      console.log(this._school);
    }
  } 
}

let person1 = new Person("Johan", 29, "Colombia");
let person2 = new Person("Andy", 17, "USA");
let person3 = new Person("Jena", 16, "UK");
let person4 = new Person("Hanna", 19, "UAE");
person1.school = "Code Tenderloin";
person2.school = "Code the Dream";


console.log(person1);
console.log(person1.name);
console.log(person1.activity);
console.log(person1.school);
console.log(person2.school);


class School {
  constructor (name, address) {
    this.name = name;
    this.address = address;
  }

  set phone (phone) {
    const phoneNormalized = phone.replace(/[^0-9]/g, "");
    this._phone = phoneNormalized;
  }

  get phone () {
    return this._phone;
  }
}

console.log(person3.school)
person3.school = new School("Berkeley", "666 Hell St");
console.log(person3.school);

console.log(person4.school)
person4.school = new School("Berkeley", "666 Hell St");
console.log(person4.school);
person4.school.phone = "(666) 666-6666";
console.log(person4.school.phone)