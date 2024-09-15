class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(val){
        this._email = val
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    }
}

const zarif = new User ("zarif@ai", "abc")
console.log(zarif);
console.log(zarif.password);
console.log(zarif.email);