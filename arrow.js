const user = {
    username : "zarif",
    price : 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`);
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "zarif"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "zarif"
//     console.log(this.username);
// }

const chai = () => {
    let username = "zarif"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

const addTwo = (num1, num2) => num1 + num2


console.log(addTwo(3, 4));

//++++++++++++++++++++++++++++++++++

addThree = function(num1, num2, num3){
    return num1 + num2 + num3
}

console.log(addThree(2,3,4));

const addFour = function(num1, num2, num3, num4){
    return num1 + num2 + num3 + num4
}
console.log(addFour(3, 4, 5, 6));

function addFive(num1, num2, num3, num4, num5){
    return num1 + num2 + num3 + num4 + num5
}
console.log(addFive(2,2,2,2,2));

const addSix = (num1, num2, num3, num4, num5, num6) => {
    return num1 + num2 + num3 + num4 + num5 + num6 
}
console.log(addSix(2,2,2,2,2,2));

const addSeven = (num1, num2, num3, num4, num5, num6, num7) => num1 + num2 + num3 + num4 + num5 + num6 + num7
console.log(addSeven(2,2,2,2,2,2,2));

const AddTwo = (num1, num2) => (num1 + num2)
console.log(AddTwo(2,6));

const AddThree = (num1, num2, num3) => ({username: "zarif"})  //we need to wrap the object for returning
console.log(AddThree(1,2,3));

const myArr = [1,2,3,4]
myArr.forEach(() => ({}))