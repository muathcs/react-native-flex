

// 1. typeof guard

function add(a:number, b:string): string{
    return a + b
}

type objType = {
    func: (num:string) => string
}


type Person = {
    name: string;
    age: number;
    [key: string]: any;  // Allow extra properties
  };
  
  const john = {
    name: "John",
    age: 30,
    extraProperty: true,
  } satisfies Person;



  type Events = {
    add:string;
    remove:string, 
    move:string
  }

  type EventKeys = keyof Events;

  const userActtions: On<Events> = {
    onAdd: ():void=>{},
    onRemove: ():void=>{}, 
    onMove:():string=>{
      return "hello"
    }
  }


type Person1 = {
  name:string, 
  age:number
}

interface NumberArray {
  [index: number]: string; // Array can have numbers at any index
}

const arr: NumberArray = ["10", "20", "30"];

type PersonWithoutName = Omit<Person1, "name">




  type On<T extends object> = {
    [key in keyof T as key extends string ? `on${Capitalize<key>}` : never]: () => any
  }


  interface Shape {
    area(): number;
    perimeter(): number;
  }
  class Circle implements Shape {
    radius: number;
    
    constructor(radius: number) {
      this.radius = radius;
    }
  
    // Implementing methods from the Shape interface
    area(): number {
      return Math.PI * this.radius * this.radius;
    }
  
    perimeter(): number {
      return 2 * Math.PI * this.radius;
    }
  }
  
  enum Direction {
    Up = 1,
    Down = 2,
    Left = Up * 2 * 2,   // Computed at runtime
    Right = 4
}

const name2:string = "hello"

console.log(name2.trim())
