class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username = ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const user = new User("zarif")

// console.log(user.createId());

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone", "mac@phone")

console.log(iphone);
iphone.logMe()
// iphone.createId()