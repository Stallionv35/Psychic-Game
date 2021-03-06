var possibleGuesses = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedCurrently= [];
var randomLetter = possibleGuesses[Math.floor(Math.random()*possibleGuesses.length)];
console.log(randomLetter)

/**
 * * Add's letters to "Guesses so far"
 */

document.onkeydown = function (event) {
    userLetter = event.key;
    guessedCurrently.push(userLetter)
    console.log("OnPageLoad letter = " + userLetter)
    document.getElementById("guesses").innerHTML = guessedCurrently.join(", ");
    
    if (possibleGuesses.includes(userLetter)) {
    
        if (randomLetter == userLetter) {
            wins++;
            guessesLeft = 9;
            guessedCurrently = [];
            document.getElementById("wins").innerHTML = wins;
        } else {
           guessesLeft--;
        }
        
        if (guessesLeft <= 0) {
           losses++;
           guessesLeft = 9;
           document.getElementById("losses").innerHTML = losses;
        }

       if (guessesLeft === 9) {
            randomLetter = possibleGuesses[Math.floor(Math.random()*possibleGuesses.length)];
            console.log("New letter = " + randomLetter )
        }
        
        document.getElementById("guessesLeft").innerHTML = guessesLeft;
    }
} 
