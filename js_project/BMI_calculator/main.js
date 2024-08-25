const form = document.querySelector("form")

// this usecase will give an empty value

// const weight = document.querySelector("#weight");
// const height = document.querySelector("#height");
// const btn = document.querySelector(button);
// const result = document.querySelector("#output")

form.addEventListener("submit",function (e){
    e.preventDefault()

    const name = document.querySelector("#name").value
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const output = document.querySelector("#output")
    const output2 = document.querySelector("#output2")

    if(height === "" || height < 0 || isNaN(height)){
        output.innerHTML="Please give a valid height."
    }
    
    else if(weight === "" || weight < 0 || isNaN(weight)){
        output.innerHTML="Please give a valid weight."
    }
    
    else if(name === "" ||  !isNaN(name)){
        output.innerHTML="Please give a valid name."
    }
    
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the output
        output.innerHTML = `${name}'s bmi is ${bmi}.`
        if(bmi<18.6){
            output2.innerHTML = "You are under weight."
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            output2.innerHTML = "You are normal. Keep it up."
        }
        else if(bmi > 24.9){
            output2.innerHTML = "You are overweight."
        }
    }
    
})