// Object literal

const user = {
    username: "zarif",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user detais from database");
        // console.log(`Username is: ${this.username}`);
        console.log(this);
    }
}

console.log(user);
console.log(user.username);
console.log(user.getUserDetails());
console.log(this);


// Constructor function
// "new" creates a new constructor function

const promiseOne = new Promise(function(resolve, reject){})
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("zarif", 12, true)
const userTwo = new User("khan", 11, false)
console.log(userOne);
console.log(userTwo);