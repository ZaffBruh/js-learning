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