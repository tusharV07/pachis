btn = document.querySelector(".start")
sec1 = document.querySelector(".sec1")
sec2 = document.querySelector(".sec2")
sec3 = document.querySelector(".sec3")
imeg = document.querySelector(".imeg")


function render(){
    document.body.style.backgroundColor = "rgb(49, 49, 49)"
    document.body.style.color= "rgb(206, 231, 235)"
    setTimeout(function(){
        sec1.classList.add("active")
        imeg.classList.add("pos1")
    },1000)

    setTimeout(function(){
        sec2.classList.add("active")
        imeg.classList.add("pos2")
    },4000)

    setTimeout(function(){
        imeg.classList.add("active")
    },5000)

    setTimeout(function(){
        sec3.classList.add("active")
        imeg.classList.add("pos3")
    },9000)

}

btn.addEventListener("click", render)