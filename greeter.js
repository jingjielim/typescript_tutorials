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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello there, " + person.firstName + " " + person.lastName;
}
var username = new Student("Jane", "M.", "User");
document.body.textContent = greeter(username);
