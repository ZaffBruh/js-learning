// For loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}
// console.log(element);

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        //console.log(`Inner= loop value: ${j} and outer loop value ${i}`);
        console.log(`${i}*${j} = ${i*j}`);
    } 
}

const myArr = ["Spiderman", "Batman", "Superman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(`${i+1} = ${element}`);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`${i} Detected`);
        break;
    }
    console.log(`Value is ${i}`);;
}

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`${i} Detected`);
        continue;
    }
    console.log(`Value is ${i}`);;
    
}

// While loop

let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index+2
}

let myArray = ["flash", "thor", "Dr. stranger"]
let arr = 0
while (arr < myArray.length) {
    console.log(`${arr+1} = ${myArray[arr]}`);
    arr++
}

// Do while loop

let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);


// for of loop

//[{}, {}, {}] //objects in array

const arr1 = [1, 2, 3, 4]

for (const value of arr1) {
    console.log(value);
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`Each character of hello world is ${greet}`);
}

// maps

// const map = new Map()
// map.set("BN", "Bangladesh")
// map.set("USA", "United States of America")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":- ", value);
// }

const myObject = {
    game1: "nfs",
    game2: "spiderman"
}
console.log(myObject);

// for (const obj of myObject) {
//     console.log(obj);
// }


// For in loop


const myObj = {
    js : "JavaScript",
    rb : "Ruby",
    cpp : "C++",
    py : "Python"
}

for (const key in myObj) {
    console.log(`${key} is shortcut for ${myObj[key]}`);
    }

const programming = ["js", "rb", "cpp", "py", "java"]
for (const key in programming) {
    console.log(`${key} = ${programming[key]}`);
}

const map = new Map()
map.set("BN", "Bangladesh")
map.set("USA", "United States of America")

//console.log(map);

// for (const key in map) {
//   console.log(key);
//   //console.log(map[key]);
// }
for (const key of map) {
    console.log(key);
}

// for each loop

const coding = ["js", "cpp", "ruby", "java", "py"]

coding.forEach( function (item) {
    console.log(item);
} )

coding.forEach((item) => {
    console.log(item);
})

for (let i = 0; i < coding.length; i++) {
    console.log(`item${i+1} = ${coding[i]}`);
    
}

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log("Item's name is " + item);
}

coding.forEach(printMe)

coding.forEach((item, index, array) => {
    console.log(item, index, array);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js",
        SI : 1
    },
    {
        languageName : "python",
        languageFileName : "py",
        SI : 2
    },
    {
        languageName : "ruby",
        languageFileName : "rb",
        SI : 3
    }
]

myCoding.forEach((item) => {
    console.log(`${item.SI} = ${item.languageName}`);
})