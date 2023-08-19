

const playerP = document.getElementById("playerP");
const compP = document.getElementById("compP");
const resultP = document.getElementById("resultP");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");

let playerInput = 0;
let compInput = 0;

rockBtn.onclick = function(){
    playerInput = 0;
    compInput = Math.floor(Math.random() * 3);
    playerP.innerHTML = "PLAYER: ROCK";
    if(compInput == 0){
        compP.innerHTML = "COMPUTER: ROCK";
        resultP.innerHTML = "RESULT: DRAW";
    }else if(compInput == 1){
        compP.innerHTML = "COMPUTER: PAPER";
        resultP.innerHTML = "RESULT: LOSE";
    }else{
        resultP.innerHTML = "RESULT: WIN";
        compP.innerHTML = "COMPUTER: SCISSORS";
    }
}
paperBtn.onclick = function(){
    playerInput = 1;
    compInput = Math.floor(Math.random() * 3);
    playerP.innerHTML = "PLAYER: PAPER";
    if(compInput == 0){
        compP.innerHTML = "COMPUTER: ROCK";
        resultP.innerHTML = "RESULT: WIN";
    }else if(compInput == 1){
        resultP.innerHTML = "RESULT: DRAW";
        compP.innerHTML = "COMPUTER: PAPER";
    }else{
        resultP.innerHTML = "RESULT: LOSE";
        compP.innerHTML = "COMPUTER: SCISSORS";
    }
}
scissorsBtn.onclick = function(){
    playerInput = 2;
    compInput = Math.floor(Math.random() * 3);
    playerP.innerHTML = "PLAYER: SCISSORS";
    if(compInput == 0){
        compP.innerHTML = "COMPUTER: ROCK";
        resultP.innerHTML = "RESULT: LOSE";
    }else if(compInput == 1){
        resultP.innerHTML = "RESULT: WIN";
        compP.innerHTML = "COMPUTER: PAPER";
    }else{
        resultP.innerHTML = "RESULT: DRAW";
        compP.innerHTML = "COMPUTER: SCISSORS";
    }
}

