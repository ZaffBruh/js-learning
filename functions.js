console.log("H");
console.log("E");
console.log("L");
console.log("L");
console.log("O");

function hello(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

//console.log(hello())

// function of adding two numbers
// function addTwoNumbers(number1, number2) {  //parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    console.log("ZARIF"); //after return, no code will be executed
}

addTwoNumbers(3 ,5)  //arguments
const result = addTwoNumbers(3,5)  //if u return in a function, then the value can be passed into a variable
console.log(`result: ${result}`);
console.log("result: ",result);

function loginUserMessage(username = "zaff"){
    if(!username){
        console.log("please insert a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Zarif"))
console.log(loginUserMessage())

function adds(num1, num2){
    return console.log(num1 + num2);
}
adds(2,3)

//++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(2, 3));

const user = {
    username: "zarif",
    price: 99

}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username: "khan",
    price: 500
})

const myNewArray = [100, 200, 300]
function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10,20,30,40]));