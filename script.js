var timer = 60;
var score = 0;
var hitrn;

function makeBubble(){
    var clutter = "";

    for(var i = 0; i <102; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`;
    }

    document.querySelector('#pbtm').innerHTML = clutter;
}

function runTimer(){
    var timerInterval = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector('#timerval').textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector('#pbtm').addEventListener('click', function(dets){
    var clickedNumber = Number(dets.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

runTimer();
makeBubble();
getNewHit();