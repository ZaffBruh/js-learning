const bg = document.querySelectorAll("button")
const body = document.querySelector("body")

bg.forEach((bg) => {
    bg.addEventListener("click", function(e){
        if(e.target.id === "white"){
            body.style.backgroundColor = "white";
            body.style.color = "black"; 
        }
        if(e.target.id === "black"){
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
    })
})