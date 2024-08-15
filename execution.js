// javascript execution context

//there are three types execution context: 1) global EC 2) function execution context 3) eval EC

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
//console.log(addNum(val1, val2));
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//call stack

function one(){
    console.log("one");
    two()
}
const two = () => {
    console.log("two");
    three()
}
const three = function(){
    console.log("three");
}

one()
two()
three()