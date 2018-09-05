
//variables
var wins = 0;

//initialization variables
var guessesLeft = 13;
var guessesSoFar = [];
var currentWord = [];

//hagman words
// function computer() {
var computerChoices = ["venezuela", "finland", "russia", "greece", "brazil", "mexico", "argentina", "turkey", "japan", "sweden", "dubai", "china", "peru", "germany", "chile", "thailand", "india", "switzerland"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
console.log(computerGuess);
var wordLength = computerGuess.length;
console.log(wordLength);
var underscore = " _ ".repeat(wordLength);
console.log(underscore);
// }
// //call the function computer
// computer();

// variables to hold references
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");

function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
replaceAt();

//onkeyup for the user variable
document.onkeyup = function (event) {

    //user letter choice
    var userChoice = event.key;

    //Array for guesses so far will display as Upper Case.
    var guessesUpper = userChoice.toUpperCase();
    guessesSoFar.push(guessesUpper);

    // All letters must be lower case to compare
    var userGuess = userChoice.toLowerCase();
    console.log(userGuess);

    //Compare every letter in the array with the letter the user selected

    for (var i = 0; i < wordLength; i++) {
        var letter = computerGuess[i];

        if (userGuess === letter) {
            var word = underscore.replaceAt(" _ ", 1, letter);
            console.log(word);
        }
    }
    guessesLeft--;
    console.log(guessesLeft);

    // // if (guessesLeft === 0){
    // //     guessesLeft = 13;
    // //     guessesSoFar = [];
    // //     computer();
    // // }

    guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar.join(", ");
};


