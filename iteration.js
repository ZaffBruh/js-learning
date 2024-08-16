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