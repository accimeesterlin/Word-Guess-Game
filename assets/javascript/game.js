
//variables
var wins = 0;
var guessesLeft = 13;
var guessesSoFar = [];
var j = 0;
// create a string instead of an array
var currentWord = [];

//hagman words
var computerChoices = ["venezuela", "finland", "russia", "greece", "brazil", "mexico", "argentina", "turkey", "japan", "sweden", "dubai", "china", "peru", "germany", "chile", "thailand", "india", "switzerland"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

// variables to hold references
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");

//onkeyup for the user variable
document.onkeyup = function (event) {

    //user letter choice
    var userChoice = event.key;

    // All letters must be lower case to compare
    var userGuess = userChoice.toLowerCase();
    console.log(userGuess);

    //Array for guesses so far will display as Upper Case.
    // var guessesUpper = userChoice.toUpperCase();
    guessesSoFar.push(userGuess);

    if (j < 13) {

        //Compare every letter in the array with the letter the user selected
        for (var i = 0; i < computerGuess.length; i++) {
            var letter = computerGuess.charAt(i);

            if (userGuess === letter) {
                // position of the letter in the array
                var position = computerGuess.indexOf(letter);
                console.log(position);
                currentWord.push(userGuess);
                // number of times the letter is in the word
                var number = computerGuess.match(letter).length;
                console.log(number);
                // push only the amount of letters that are in the word chosen by the computer
            }
        }

        guessesLeft--;
        j++;

        // if the user guesses all the letters wins++. 
        // if (currentWord === computerGuess) {
        //     wins++;
        //     j = 0;
        //     guessesLeft = 13;
        //     guessesSoFar = [];
        //     computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        //     currentWord = [];
        // }

        // if the guesses reach to 0 the game will start over again
        if (guessesLeft === 0) {
            j = 0;
            guessesLeft = 13;
            guessesSoFar = [];
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            currentWord = [];
            console.log(computerGuess);
        }
    }

    //display variables 
    winsText.textContent = "Wins: " + wins;
    currentWordText.textContent = "Current Word: " + currentWord.join(" ");
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar.join(", ");
};


