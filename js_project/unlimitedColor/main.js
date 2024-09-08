let bgColor = document.querySelector("body")
let start = document.querySelector("#start")
let stop = document.querySelector("#stop")


start.addEventListener("click",function(){
    console.log("started");
     set = setInterval(function(){
        bgColor.style.backgroundColor = "blue"
    },3000)
     set2 = setInterval(function(){
        bgColor.style.backgroundColor = "red"
    },6000)
     set3 = setInterval(function(){
        bgColor.style.backgroundColor = "green"
    },9000)
     set4 = setInterval(function(){
        bgColor.style.backgroundColor = "purple"
    },12000)
     set5 = setInterval(function(){
        bgColor.style.backgroundColor = "yellow"
    },15000)
    
})

stop.addEventListener("click", function(){
    console.log("stopped");
    clearInterval(set)
    clearInterval(set2)
    clearInterval(set3)
    clearInterval(set4)
    clearInterval(set5)
})

