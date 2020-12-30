var mySearchFunc;
mySearchFunc = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
console.log(myArray["Bob"]);
var myDog = { name: "Herman", breed: "Doggy" };
console.log(myDog);
var myAnimal = { name: "James" };
var okay = { myDog: myDog, myAnimal: myAnimal };
console.log(okay.myDog);
var numOrString = { length: 5, name: "hello", fish: "blbabla" };
console.log(numOrString);
console.log(numOrString["fish"]);
