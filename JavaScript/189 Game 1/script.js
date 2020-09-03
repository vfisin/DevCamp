//This scipt is for score keeping game

var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var p = document.querySelector("p");


function endGame () {
    if (p1Score === winningScore) {
        gameOver = true;
        p1Display.classList.add("winner");
        console.log("Game Over!")
    }
    else if (p2Score === winningScore) {
        gameOver = true;
        p2Display.classList.add("winner");
        console.log("Game Over!")
    }
};

p1Button.addEventListener("click", function(){
    if (!gameOver) {
        p1Score++;
        console.log(p1Score);
        p1Display.textContent = p1Score
    }
    endGame();
});

p2Button.addEventListener("click", function(){
    if (!gameOver) {
        p2Score++;
        console.log(p2Score);
        p2Display.textContent = p2Score
    }
    endGame();
});

function resetGame () {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver = false
};

numInput.addEventListener("change", function(){
    winningScore = Number(this.value);
    p.textContent = "Playing to: " + this.value;
    resetGame();
});

reset.addEventListener("click", resetGame);
