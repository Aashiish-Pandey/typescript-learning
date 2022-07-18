"use strict";
// Basic types
let id = 5;
let company = "PS";
let isPublished = true;
let X = "Hello";
X = 123;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//tuple
let person = [1, "brad", true];
// tuple array
let employee;
employee = [
    [1, "ash"],
    [2, "pan"],
    [3, "day"],
];
// union
let id1 = 22;
// enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
const user = {
    id: 1,
    name: "Ashish"
};
// Type Assertion 
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
// Functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(2, 3));
// void
function log(message) {
    console.log(message);
}
log("Ashish");
let user1 = {
    uid: 1,
    name: "asjddj"
};
const add = (x, y) => x + y;
// classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        console.log(`${this.name} is registered`);
    }
}
const obj1 = new Person(123, "ashish");
console.log(obj1.register());
