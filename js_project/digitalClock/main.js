const clock = document.querySelector("#clock")
//const clock = document.getElimentById("clock")



setInterval(function () {
    let date = new Date()
    //console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)