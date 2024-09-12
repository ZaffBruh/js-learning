let myName = "zarif   "
let myChannel = "chai    "
console.log(myName.trim().length);


let myHeroes = ["thor", "spiderman", "batman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    batman: "rich",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.zarif = function(){
    console.log(`zarif is present in all objects`);
}

Array.prototype.heyZarif = function(){
    console.log(`zarif says hello`);
}

// heroPower.zarif()
myHeroes.zarif()
myHeroes.heyZarif()
// heroPower.heyZarif()


//+++++++ Inheritance +++++++++++++++++

const user = {
    username: "zarif"
}

const teacher = {
    makeVideo: true
}

const teacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: "JS assignment",
    fullTime: true,
    __proto__: teacherSupport
}

teacher.__proto__ = user

//modern Syntax

Object.setPrototypeOf(teacherSupport, teacher)

/////// prototype 

let anotherUser = "khan   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
}
anotherUser.trueLength()
"zarif   ".trueLength()