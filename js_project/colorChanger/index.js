const buttons = document.querySelectorAll("button")
const body = document.querySelector("body")

buttons.forEach((button) => {
    console.log(button);
    button.addEventListener("click", function(e) {
        console.log(e);
        console.log(e.target);
        if(e.target.id === "g"){
            body.style.backgroundColor = "green"
        }
        if(e.target.id === "r"){
            body.style.backgroundColor = "red"
        }
        if(e.target.id === "b"){
            body.style.backgroundColor = "blue"
        }
        if(e.target.id === "o"){
            body.style.backgroundColor = "orangered"
        }
        if(e.target.id === "reset"){
            body.style.backgroundColor = "black"
        }
    })
})