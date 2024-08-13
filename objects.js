//singleton 
//object.create

//object literals

const mySym = Symbol("key1")
const jsUser = {
    name: "zarif",
    "full name": "zarif khan",
    age: 24,
    [mySym]: "myKey1", //object
    location: "Dhaka",
    email: "zarif@gmail.com",
    isLoggedIn: false,
    lastLogInDays: ["saturday", "sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);
console.log(typeof mySym);
console.log(typeof jsUser[mySym]);

jsUser.email = "zarif@gpt.com"
//Object.freeze(jsUser)
jsUser.email = "khan@gmai.com"
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser);

jsUser.greeting = function(){
    console.log("hello");
}

jsUser.greetingTwo = function(){
    console.log(`hello ${this.name}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

//+++++++++++++++++++++++++++++++++++++

const tinderUser = new Object() //singleton object
//const tinderUser1 = {} //non-singleton object
tinderUser.id = "123"
tinderUser.name = "zarif"
tinderUser.isLoggedIn = false

console.log(tinderUser.id);
console.log(tinderUser["id"]);

const regularUser = {
    email : "zaff@gmail.com",
    full_name : {
        userfullname : {
            firstname : "zarif",
            lastname : "khan"
        }
    }
}

console.log(regularUser.full_name);
console.log(regularUser.full_name.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2, ...obj4} //spread
console.log(obj3);

const users = [
    {
        id: 1,
        email: "zarif@gmail.com"
    },
    {
        id: 2,
        email: "zarif@gmail.com"
    },
    {
        id: 3,
        email: "zarif@gmail.com"
    }
]

console.log(users[1].id);
console.log(users[0].id);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "JavaScript",
    price: "99$",
    course_instructor: "zarif"
}

//course.course_instructor
const {course_instructor} = course
console.log(course_instructor);
const {course_instructor: ins} = course
console.log(ins);

//++++++++++++++++++ Json +++++++++++++++++++++

// {
//     name: "khan",
//     price: "free",
//     coursename: "js"
// }

[
    {},
    {},
    {}
]