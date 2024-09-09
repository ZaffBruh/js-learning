//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color
}

document.getElementById("start").addEventListener("click",function(){
    set = setInterval(function(){
        document.body.style.backgroundColor = randomColor()
    },2000)
})

document.getElementById("stop").addEventListener("click",function(){
    clearInterval(set)
})
