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
        if(e.target.id === "red"){
            body.style.fontFamily = "courier";
        }
        if(e.target.id === "yellow"){
            body.style.fontFamily = "cursive";
        }   
    })
})

// +++++++++++ guessing number script ++++++++++++++++

const randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#btn")
const userInput = document.querySelector("#input")
const previousGuesses = document.querySelector("#prevNum")
const remainGuess = document.querySelector("#remainGuess")
const lowOrHigh = document.querySelector(".lowOrHigh")
const startOver = document.querySelector(".resultPara")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number")
    }
    else if(guess < 1){
        alert("Please enter a greater than 1 number")
    }
    else if(guess > 100){
        alert("Please enter a less than 100 number")
    }
    else{
        prevGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNum}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMsg("Congratulations! You guessed it right.")
        endGame()
    }
    else if(guess < randomNum){
        displayMsg("Your guess is low")
    }
    else if(guess > randomNum){
        displayMsg("Your guess is high")
    }
}

function displayGuess(guess){
    userInput.value = ""
    previousGuesses.innerHTML += `${guess}, `
    numGuess++;
    remainGuess.innerHTML = `${11 - numGuess}` 
}

function displayMsg(msg){
    lowOrHigh.innerHTML = `${msg}`
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")

    newGameButton.addEventListener("click", function(e){
        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        previousGuesses.innerHTML = ""
        remainGuess.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled");
        startOver.removeChild(p)
        playGame = true
    })
}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<button id="newGame">Start New Game</button>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}