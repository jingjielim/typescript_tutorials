let helloWorld = "Hello World"
// let hellowWorld: string

// helloWorld = 1
// Error: helloWorld has been defined as a string above

// Defining types with interface
interface User {
    name: string,
        id: number
}

//Declare a JS object that conforms to the shape of the new interface 
const user: User = {
    name: "Hayes",
    id: 0,
}

// you can use an interface declaration with classes:

class UserAccount {
    name: string
    id: number

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const user2: User = new UserAccount("Murphy", 1)

// you can use interfaces to annotate parameters and return values to functions
function getAdminUser(): User {
    //...
    return {name: "james", id: 2}
}

function deleteUser(user: User) {
    //...
}

//Composing types with unions
type MyBool = true | false;

// describe the set of strings or numbers literal that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized"
type LockStates = "locked" | "unlocked"
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

// unions provide a way to handle different types too e.g. a function that takes an array or a string

function getLength(obj: string | string[]) {
    return obj.length
}

typeof "Hello"

// Generics
// provide variables to types. e.g. an array with generics can describe the values that the array contains
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{name: string}>

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

declare const backpack: Backpack<string>

const object = backpack.get()

backpack.add("Hello")

let x: [string, number];
x = ["hello", 10]
x = ["bye", 20]
