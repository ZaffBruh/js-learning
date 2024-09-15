class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
}

const zarif = new User ("zarif@ai", 123)
console.log(zarif);
console.log(zarif.password);