class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
    }
}

const user = new teacher("zarif", "zaff@mail", 123)

user.addCourse();
user.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()