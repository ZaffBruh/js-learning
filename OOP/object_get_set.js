const User = {
    _email: "zarif@chai",
    _password: "123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea.password);