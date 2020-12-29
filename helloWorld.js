var helloWorld = "Hello World";
//Declare a JS object that conforms to the shape of the new interface 
var user = {
    name: "Hayes",
    id: 0
};
// you can use an interface declaration with classes:
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount("Murphy", 1);
// you can use interfaces to annotate parameters and return values to functions
function getAdminUser() {
    //...
    return { name: "james", id: 2 };
}
function deleteUser(user) {
    //...
}
// unions provide a way to handle different types too e.g. a function that takes an array or a string
function getLength(obj) {
    return obj.length;
}
typeof "Hello";
var object = backpack.get();
backpack.add("Hello");
var x;
x = ["hello", 10];
x = ["bye", 20];
