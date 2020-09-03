var secretNumber = 4;

var guess = Number(prompt("Guess a number"));

if (guess === secretNumber) {
    alert("Guessed");
}

else if (guess > secretNumber) {
    alert("Too High");
}
else {
    alert("Too low");
}





