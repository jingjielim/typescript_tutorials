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

interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  constructor(h: number, m: number) {}

  setTime(d: Date): void {
    this.currentTime = d;
  }
}
