function add(x, y) {
    if (x < 0 && y < 0) {
        return "NO!";
    }
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(4, 5));
// We can give functions a type too
// A function's type has two parts; the type of the arguments and the return type. Both parts are required when writing out the whole function type.
// Only one side of the equation is required to have types for TypeScript to figure out the type
var myAdd2 = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob");
console.log(result1);
