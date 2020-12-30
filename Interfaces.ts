interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearchFunc: SearchFunc;

mySearchFunc = function (src: string, sub: string): boolean {
  let result = src.search(sub);
  return result > -1;
};
/**
 * Indexable types
 * have an index signature that describes the types
 * we can use to index into the object, along with the
 * corresponding return types when indexing
 */

// String Array interface has an index signature that
// states that when a StringArray is indexed with a number,
// it will return a string
interface StringArray {
  [x: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

console.log(myArray["Bob"]);

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

let myDog: Dog = { name: "Herman", breed: "Doggy" };

console.log(myDog);

interface NotOkay {
  [x: number]: Dog;
  [x: string]: Animal;
}

let myAnimal: Animal = { name: "James" };

let okay: NotOkay = { myDog, myAnimal };
console.log(okay.myDog);

interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}

let numOrString: NumberOrStringDictionary = {
  length: 5,
  name: "hello",
  fish: "blbabla",
};
console.log(numOrString["fish"]);

// interface ClockInterface {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// class Clock implements ClockInterface {
//   currentTime: Date = new Date();

//   constructor(h: number, m: number) {}

//   setTime(d: Date): void {
//     this.currentTime = d;
//   }
// }

// Interfaces describe the public side of the class, rather than both the public and private side, prohibiting you from using them to check that a class also has particular types for the private side of the class instance

// Keep in mind that a class has two types: the type of the static side and the type of the instance side. If you create an interface with a construct signature and try to create a class that implements this interface you get an error

// This is because when a class implements and interface, only the instance side of the class is checked. Since the constructor sits in the static side, it is not included in this check

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick(): void;
}

class AnalogClock implements ClockInterface {
  currentTime: Date;
  tick(): void {
    console.log("Tick Tock");
  }
}
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

let analog = createClock(AnalogClock, 12, 17);

// Extending interfaces

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

// Hybrid Types
// Object that works as a combination of some of the types described above
// E.g. an object that acts as both a function and an object, with additional properties

interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter{
  let counter = function(start: number) {} as Counter;
  counter.interval = 30
  counter.reset = function(){}
  return counter
}

let c = getCounter()
c(20)
c.reset()
c.interval = 43


// Interfaces Extending Classes

// Interface tyoe can extend a class. But when an interface type extends a class type it inherits the members of the class but not their implementations
// It is as if the interface had declared all of the members of the class without providing an implementation. Interfaces inherit even the private and protected members of a basec class
