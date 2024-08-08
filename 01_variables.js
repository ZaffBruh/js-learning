const accountId = 26
let accountEmail = "zarif@gmail.com"
var accountPassword = "123"
accountCity = "Dhaka"
let accountState;
//accountId = 2 // not allowed

accountEmail = "khan@gmail.com"
accountPassword = "1234"
accountCity = "rajshahi"

console.log(accountId);

/*
dont use "var"
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])