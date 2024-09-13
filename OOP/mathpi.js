const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(Math.PI);
// console.log(Math.floor(Math.PI))
console.log(descriptor);

// const myNewObject = Object.create(null)

const chai = {
    name: "ginger chai",
    price: 250,
    isAvailable: true
}

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false,
    configurable: true,

    orderChai: function(){
        console.log("chai is not ready");
    }
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== "function"){
        console.log(`${key}: ${value}`);
    }
    
}

