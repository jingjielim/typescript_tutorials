// function greeter(person) {
//     return "Hello, " + person;
// }

// let username = "Jane User"

// document.body.textContent = greeter(username)

// Using interfaces
// interface Person {
//     firstName: string;
//     lastName: string;
// }

// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName
// }

// let username = {
//     firstName: "Jane",
//     lastName: "User"
// }

// document.body.textContent = greeter(username)

// Using classes
class Student {
    fullName: string;
    constructor(
      public firstName: string,
      public middleInitial: string,
      public lastName: string
    ) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
  }
  
  interface Person {
    firstName: string;
    lastName: string;
  }
  
  function greeter(person: Person) {
    return "Hello there, " + person.firstName +  " " + person.lastName;
  }
  
  let username = new Student("Jane", "M.", "User");
  
  document.body.textContent = greeter(username);