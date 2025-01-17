const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB call, cryptography, network
    setTimeout(function(){
       console.log("Async task is completed"); 
       resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//another way to execute

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("async two is resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "zarif", password: "123"})
        } else{
            reject("Error! Something went wrong.")
        }
    },1000)
})
promiseFour.then((r) => {
    console.log(r);
    return r.username
}).then(function(user){
    console.log(user);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("the promise is either resolved or rejected");
})

//try-catch syntax

let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "khan", password: "123"})
        }else{
            reject("An error has been occured ")
        }
    },1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//fetch

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://api.github.com/users/zaffbruh")
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }
// getAllUsers()

//in then-catch format

const promiseSix = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve(fetch("https://api.github.com/users/zaffbruh"))
    }else{
        reject("Error occured")
    }
})
promiseSix.then(function(u){
    console.log(u);
}).catch(function(e){
    console.log("E: ",e);
}).finally(function(){
    console.log("Promise has been resolved or rejected");
})