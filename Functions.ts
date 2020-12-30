function add(x: number, y: number) {
  if (x < 0 && y < 0) {
    return "NO!";
  }
  return x + y;
}

let myAdd = (x: number, y: number) => {
  return x + y;
};

console.log(myAdd(4, 5));

// We can give functions a type too
// A function's type has two parts; the type of the arguments and the return type. Both parts are required when writing out the whole function type.

// Only one side of the equation is required to have types for TypeScript to figure out the type
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

function buildName(firstName: string, lastName?: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob")
console.log(result1)

function buildNameRest(firstName: string, ...restOfName: string[]){
    return firstName+" " + restOfName.join(" ")
}

let buildNameFun:(fname: string, ...rest: string[]) => string = buildNameRest

// Dealing with this in TypeScript