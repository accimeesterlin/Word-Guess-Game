// variables
var wins = 0;

//initialization 
var guessesLeft = 13;
var guessesSoFar = [];

// hangman words
var computerChoices = ["venezuela", "finland", "russia", "greece", "brazil", "mexico", "argentina", "turkey", "japan", "sweden", "dubai", "china", "peru", "germany", "chile", "thailand", "india", "switzerland"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
console.log(computerGuess);
var wordLength = computerGuess.length + 1;
var underscore = [];

// variables to hold references
var winsText = document.getElementById("wins");
var currentWordText = document.getElementById("currentWord");
var guessesLeftText = document.getElementById("guessesLeft");
var guessesSoFarText = document.getElementById("guessesSoFar");

// onkeyup to select letters

document.onkeyup = function (event) {
    var userChoice = event.key;
    var userGuess = userChoice.toLowerCase();

    guessesSoFar.push(userGuess.toUpperCase());

    for (var i = 0; i < computerGuess.length; i++) {
        var letter = computerGuess[i];

        if (userGuess === letter) {
            underscore[i] = userGuess;
            wordLength--;

            if (wordLength === 0) {
                wins++;
                guessesSoFar = [];
                guessesLeft = 13;
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
                underscore = [];
            }
        }
    }
    guessesLeft--;


    if (guessesLeft === 0) {
        underscore = [];
        guessesLeft = 13;
        guessesSoFar = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
        console.log(computerGuess);
    }

    winsText.textContent = "Wins: " + wins;
    currentWordText.textContent = "Current Word: " + underscore.join("  ");
    guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar.join(" , ");
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
};

// //initialization variables
// var guessesLeft = 13;
// var guessesSoFar = [];
// // var currentWord = [];

// //hagman words
// // function computer() {
// var computerChoices = ["venezuela", "finland", "russia", "greece", "brazil", "mexico", "argentina", "turkey", "japan", "sweden", "dubai", "china", "peru", "germany", "chile", "thailand", "india", "switzerland"];
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
// console.log(computerGuess);
// var wordLength = computerGuess.length;
// console.log(wordLength);
// var underscore = [];
// // console.log(underscore);
// var under = " _ ".repeat(wordLength);
// underscore.push(under);
// // console.log(underscore);

// // }
// // //call the function computer
// // computer();

// // variables to hold references
// var winsText = document.getElementById("wins");
// var currentWordText = document.getElementById("currentWord");
// var guessesLeftText = document.getElementById("guessesLeft");
// var guessesSoFarText = document.getElementById("guessesSoFar");


// //onkeyup for the user variable
// document.onkeyup = function (event) {

//     //user letter choice
//     var userChoice = event.key;

//     //Array for guesses so far will display as Upper Case.
//     var guessesUpper = userChoice.toUpperCase();
//     guessesSoFar.push(guessesUpper);

//     // All letters must be lower case to compare
//     var userGuess = userChoice.toLowerCase();
//     console.log(userGuess);

//     //Compare every letter in the array with the letter the user selected

//     for (var i = 0; i < computerGuess.length; i++) {
//         var letter = computerGuess[i];

//         if (userGuess === letter) {
//             underscore[i] = userGuess;
//             wordLength--;
//             console.log(wordLength);
//         }
//         // else //if statement to see if the space is blank 
//         // {
//         //     underscore[i] = " _ ";
//         // }

//         if (wordLength === 0) {
//             guessesLeft = 13;
//             guessesSoFar = [];
//             computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
//             console.log(computerGuess);
//             underscore = [];
//             wins++;
//             // wordLength = computerGuess.length;
//             // under = " _ ".repeat(wordLength);
//             // underscore.push(under);
//         }
//     }

//     guessesLeft--;

//     if (guessesLeft === 0){
//         underscore= [];
//         guessesLeft = 13;
//         guessesSoFar = [];
//         computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)].split("");
//         wordLength = computerGuess.length;
//         under = " _ ".repeat(wordLength);
//         underscore.push(under);
//     }

//     winsText.textContent = "Wins: " + wins;
//     currentWordText.textContent = "Current Word: " + underscore.join(" ");
//     guessesSoFarText.textContent = "Guesses So Far: " + guessesSoFar.join(", ");
// };


