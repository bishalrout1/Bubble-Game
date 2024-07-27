var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


function getNewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}


function makeBubble(){
    var clutter = "";

for(var i = 1; i <= 102 ; i++){
    
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector(".pbtm").innerHTML = clutter;
}


function runTimer(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML = "";
            document.querySelector(".pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}

document.querySelector(".pbtm").addEventListener("click",function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewhit();
    }
})


runTimer();
makeBubble();
getNewhit();
