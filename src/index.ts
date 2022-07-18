// Basic types

let id: number = 5;
let company: string = "PS";
let isPublished: boolean = true;
let X: any = "Hello";
X = 123;

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//tuple

let person: [number, string, boolean] = [1, "brad", true];

// tuple array

let employee: [number, string][];

employee = [
  [1, "ash"],
  [2, "pan"],
  [3, "day"],
];

// union

let id1: string | number = 22;

// enum

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left);


// Objects

type User = {
    id: number,
    name:string
}

const user :User= {

    id:1,
    name:"Ashish"

}

// Type Assertion 

let cid: any =1

// let customerId = <number>cid

let customerId = cid as number


// Functions

function addNumber(x:number,y:number):number {

    return x+y
}


console.log(addNumber(2,3))

// void

function log(message: string| number):void {

    console.log(message)
}

log("Ashish")

// Interfaces

interface newUser{

    readonly uid:number
    name:string
    age?:number

}

let user1:newUser={

    uid:1,
    name:"asjddj"
}

// interface vs type ????????

// interface with functions


interface MathFunc {

    (x:number, y:number):number
}

const add:MathFunc = (x:number, y:number):number => x+y


// classes

interface personInterface{
    id :number
    name:string
    register(): string
}

class Person implements personInterface {

    id:number
    name:string
    constructor(id:number,name:string) {

        this.id =id
        this.name =name
    }

    register() {
        return "Hello Hello"
    }
}

const obj1 = new Person(123,"ashish")

console.log(obj1.register())

// Subclasses

class Employee extends Person {

    position:string

    constructor(id:number, name: string, position:string) {

        super(id,name)
        this.position =position
    }
}


const emp1 = new Employee(3,"Ashish","hdhdhd")


// Generics 

function getArray<T>(items:T[]):T[] {

    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3])
let strArray = getArray<string>(["Asnsnsh","kasfhdk"])

numArray.push(100)