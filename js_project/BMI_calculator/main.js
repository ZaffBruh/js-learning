const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const btn = document.querySelector(button);
const result = document.querySelector(".output")

btn.forEach(function (btn) {
    btn.addEventLstener("click",function (e){
        e = weight/(height*height)
        body.output = e;
    })
})
