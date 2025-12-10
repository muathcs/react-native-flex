

// Generic function

// A generic function in TypeScript is a function that can work with any type while maintaining type safety. 
// It uses type parameters (e.g., <T>) to define the type dynamically.

function identity<T>(arg: T): T {
    return arg;
  }
  
  let output = identity<string>("Hello"); // Output: "Hello" (type string)
  let output2 = identity<number>(42);     // Output: 42 (type number)




// what is as const

// /In TypeScript, as const is a type assertion that makes a value immutable and infers
//  its type as literal (exact value) rather than a general type. Here's a quick breakdown:
const config = {
    host:"host",
    port:45, 
    test:{
        name:"muath"
    } as const
} 

// In TypeScript, the private access modifier restricts access to a class member 
// (property or method) to only within the class itself. Here's a quick breakdown:

class Service {
    private config:string
    constructor(){
        this.config = "test"
    }
}

const newService = new Service();

// newService.config // error 




//TODO - difference between types and interfaces

//In TypeScript, both type and interface are used to define types, but there are some differences in how they work and when to use each.

//interface can be extended or merged using the extends keyword. and they support declaration merging, so if you create the interface with same name they combine. 

//type cannot be extended in the same way but can combine types using intersection (&).

  
// interface Person {
//     name:string, 
//     age:number
// }
  // interface Employee extends Person {
  //   jobTitle: string;
  // }
  
  type PersonType = {
    name: string;
    age: number;
  };
  
  type EmployeeType = PersonType & { jobTitle: string }; // intersection

  interface Man {
    name:string
  }

interface Man{
    age:number
  }


  const obj:Man = {
    name:"man", 
    age:100
  }

//   interface is commonly used for defining the structure of objects, especially when you expect it to be extended or implemented by other classes.
//   type is more versatile and can be used for complex types like unions, intersections, and function types.


// TODO Type Guard. 

// interface Person {
//     name: string;
//     age: number;
//   }
  

// TODO how is stcutrual types difference from nominal typing. 


// TODO What is TypeScript primarly used for: 

// type script is primarly used for static typing, 

//Definition: In statically-typed languages, the type of a variable is determined at compile time and cannot 
// change at runtime. The types are checked before the program runs, allowing errors to be caught early.

// Dynamic Typing: Type is checked at runtime. Variables can change types during execution.

let age: number = 30;
// age = "Hello"; // Error: Type 'string' is not assignable to type 'number'

let age2 = 30;
// age2 = "Hello"; // No error in js age2 can become a string. 


// TODO Read only 

// Using readonly modifier
interface User {
    readonly id: number;
    name: string ;
}

const user: User = { id: 123, name: "John" };
// user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property

type ReadonlyUser = Readonly<User>;

// Using readonly with arrays
const numbers: readonly number[] = [1, 2, 3];

const namex = "muath" as const



// TODO Example of an enum in TypeScript
enum Direction {
    North = "NORTH",
    South = "SOUTH", 
    East = "EAST",
    West = "WEST"
}

// Using the enum
let currentDirection: Direction = Direction.North;
console.log(currentDirection); // Output: "NORTH"

// Enum with numeric values
enum StatusCode {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404
}

let responseStatus: StatusCode = StatusCode.Success;
console.log(responseStatus); // Output: 200


// TODO Type annotation and type casting

//Type annotation is a way to explicitly specify the type of 
// a variable, function, or parameter in TypeScript.
//  It helps catch errors at compile time by enforcing type rules.

let age4: number = 25; // `age` must always be a number
let name4: string = "Alice"; // `name` must always be a string

// Type Casting (as or <type>) → Converting One Type to Another
// Used at runtime to tell TypeScript to treat a variable as a specific type.
// Does NOT change the actual type, just instructs TypeScript how to interpret it.

let data: unknown = "Hello";
let length2: number = (data as string).length; // ✅ Casting `data` to `string`


// TODO Index signatures. 

//  Index signatures allows you to do static typings for dynamic properties in objects and arrays

interface Scores {
    [student: string]: number;  // The key is a string, and the value is a number.
  }
  
  const studentScores: Scores = {
    alice: 90,
    bob: 85,
  };
  
  console.log(studentScores.alice);  // 90


  // what is typescript?

//   TypeScript is a superset of JavaScript that adds static typing to the language, meaning you can specify the types 
//   of variables, function parameters, and return values. It helps catch errors during development, offers better tooling support 
//   (like autocompletion and error checking), and compiles down to regular JavaScript.