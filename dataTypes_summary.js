// Primitve datatype
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference datatype (Non-primitive)
// Array, Objects, Functions

const id = Symbol("123") 
const anotherId = Symbol("123")

//console.log(id === anotherId);

const heros = ["spiderman", "batman"]
let myObj = {
    name : "zarif",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

//++++++++++++++++++++++++++++

// stack (primitive), heap (non primitive)

let myName = "zarif"
let anotherName = myName

console.log(anotherName);

let userOne = {
    email : "zarif@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);