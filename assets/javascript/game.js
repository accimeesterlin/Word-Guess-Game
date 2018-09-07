var computerChoices = ["venezuela", "finland", "russia", "greece", "brazil", "mexico", "argentina", "turkey", "japan", "sweden", "dubai", "china", "peru", "germany", "chile", "thailand", "india", "switzerland"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
var word = computerGuess.split("");
var wordLength = computerGuess.length;
var display = [wordLength];
var length = wordLength;
var guesses = 13;
var output = "";
var guessesSoFar = [];
var win = 0;

//reset
var restart = function () {
   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    word = computerGuess.split("");
    wordLength = computerGuess.length;
    display = [wordLength];
    length = wordLength;
    guesses = 13;
    guessesSoFar= [];
    output = "";
}

// reload page. I used this as a way to restart the game because it doesn't work only restarting the variables
function myFunction() {
    location.reload();
}
//variables to hold references
var outputText = document.getElementById("output");
var winText = document.getElementById("win");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");

var checker = function () {
    for (var i = 0; i < computerGuess.length; i++) {
        display[i] = " _ ";
        output = output + display[i];
    }
    outputText.textContent = output;
    output = "";
}

var submit = function () {
    output = "";

    document.onkeyup = function (event) {
        var userChoice = event.key;
        userChoice = userChoice.toLowerCase();

        for (var j = 0; j < computerGuess.length; j++) {
            if (userChoice === word[j]) {
                display[j] = userChoice;
                length--;
            }
            output = output + display[j] + " ";

        }
        guessesSoFar.push(userChoice.toUpperCase());
        guessesText.textContent = guessesSoFar.join(", ");
        outputText.textContent = output;
        output = "";

        //if the letter is already in the array the guesses shouldn't decreased
        guesses--;

        if (length === 0) {
            win++;
            winText.textContent = "CONGRATULATIONS";
            // restart();
            myFunction();
        }
        else if (guesses < 1) {
            winText.textContent = "GAME OVER";
            //restart();
            myFunction();
        }
        else {
            guessesLeftText.textContent = guesses;
        }
    }
};

window.onload = function () {
    checker();
    submit();
}