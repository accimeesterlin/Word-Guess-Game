var computerChoices = ["venezuela", "finland", "russia", "greece", "brazil", "mexico", "argentina", "turkey", "japan", "sweden", "dubai", "china", "peru", "germany", "chile", "thailand", "india", "switzerland"];
console.log(computerChoices);
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);
var word = computerGuess.split("");
console.log(word);
var wordLength = computerGuess.length;
console.log(wordLength);
var display = [wordLength];
console.log(display);
var length = wordLength;
var guesses = 13;
var output = "";
var userChoice = "";

var checker = function () {
    for (var i=0; i < computerGuess.length; i++){
        
    }
}

