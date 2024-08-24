const form = document.querySelector("form")

// this usecase will give an empty value

// const weight = document.querySelector("#weight");
// const height = document.querySelector("#height");
// const btn = document.querySelector(button);
// const result = document.querySelector("#output")


form.addEventListener("submit",function (e){
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const output = document.querySelector("#output")

    if(height === "" || height < 0 || isNaN(height)){
        output.innerHTML="Please give a valid height"
    }
    
    else if(weight === "" || weight < 0 || isNaN(weight)){
        output.innerHTML="Please give a valid weight"
    }
    
    else {
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the output
        output.innerHTML = bmi
    }
})