//if 
const isUserLoggedIn = true
const temp = 41

if (temp=== 51){
    console.log("executed");
} else {
    console.log("another execution");
}
console.log("Not executed");

const score = 200

if(score > 100) {
    const power = "fly"
    console.log(`user power ${power}`);
}
//console.log(`user power ${power}`);  //will not execute cause power is not global variable

const balance = 1000
//if (balance > 500) console.log("test");  //implicit scope

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else {
    console.log("less than 2000");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 != 3){
    console.log("available");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}


//+++++++++++++++ switch +++++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;

    default:
        console.log("Default case match");
        break;
}

//+++++++++++++ truthy falsy+++++++++++++++++

const userEmail = "zarif@gmail.com"

if(userEmail){
    console.log("got user email");
} else {
    console.log("dont have user email");
}

//falsy values = false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values = "0", "false", " ", [], {}, function(){}

const Arr = []

if(Arr.length == 0){
    console.log("Array is empty");
}

const emptyObject = {}

if(Object.keys(emptyObject).length == 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);

val2 = 1 ?? 2 ?? 3
console.log(val2);

val3 = null ?? 10 ?? 11
console.log(val3);

val4 = undefined ?? null ?? 15
console.log(val4);

//terniary operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")

const mail = "zarif@gmail.com"
mail ? console.log("there is a email") : console.log("there is no mail");