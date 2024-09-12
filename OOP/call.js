function setUsername(username){
    //complex DB calculation
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@yoyo.com", "124")
console.log(chai);