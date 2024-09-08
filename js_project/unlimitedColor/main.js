let bgColor = document.querySelector("body")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")


start.addEventListener("click",function(){
    console.log("started");
     set = setInterval(function(){
        bgColor.style.backgroundColor = "blue"
    },3000)
})

stop.addEventListener("click", function(){
    console.log("stopped");
    clearInterval(set)
})

