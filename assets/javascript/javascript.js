var possibleGuesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guessedCurrently = []
var guessesLeft = []

document.onkeydown = function() {
    guessedCurrently.push(event.key);
    console.log(guessedCurrently);
    document.getElementById("guesses").innerHTML = guessedCurrently;
};

