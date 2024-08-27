const bg = document.querySelectorAll("button")
const body = document.querySelector("body")

bg.forEach((bg) => {
    bg.addEventListener("click", function(e){
        if(e.target.id==="bttn"){
            body.style.backgroundColor= "red";
        }
        if(e.target.id==="bttn1"){
            body.style.backgroundColor= "green";
        }
    })
})