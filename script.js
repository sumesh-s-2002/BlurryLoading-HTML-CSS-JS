const spanTag = document.querySelector("span"),
    textDiv = document.querySelector(".text"),
    container = document.querySelector(".container")

let load = 0;
let opacity = 1;
let blur = 30;

const interval = setInterval(timer,30);

function timer(){
    
    load++;
    if(load > 99){
        clearInterval(interval);
    }
    opacity -= 0.01;
    blur -= 0.29;
    spanTag.innerText = load;
    textDiv.style.opacity =  opacity;
    container.style.filter = `blur(${blur}px)`
    console.log(blur);
}
