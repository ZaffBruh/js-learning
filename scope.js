//var c = 300
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("inner: ", a);
}

console.log(a);
// console.log(b);
//onsole.log(c);

function one(){
    const username = "zarif"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    //two()
}
//one()

if(true){
    const username = "zarif"
    if(username === "zarif"){
        const website = " youtube"
        console.log(username + website);  //child function can take the parent function's variable so it will work
    }
    //console.log(website);   //parent function can NOT take child function's variable so it will NOT work
}
//console.log(username);   //its scope. the username variable can not be accessed outside the if function.


//+++++++++++++++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));