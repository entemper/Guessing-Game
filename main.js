function load() {
    
    var emoji = document.querySelector('#emoji');
    
    var guessInput = document.querySelector('#guess_input');
    
    var submitButton = document.querySelector('#submit_button');
    submitButton.addEventListener('click', guessChecker);

    var numberOfGuesses = document.querySelector('#number_of_guesses');
    var guessesLeft = 5;
    numberOfGuesses.innerHTML = guessesLeft;

    var result = document.querySelector('#result');
    var remainingGuessParagraph = document.querySelector('#remainingGuessParagraph');

    var randomNumber = Math.floor(Math.random() * (+100 - +1)) + +1;
    // console.log("The correct guess will be " + randomNumber + ".");

    function guessChecker() {
        
        var guess = guessInput.value;

        guessInput.value = "";

        if(isNaN(guess)) {
            emoji.innerHTML = "😠";
            result.innerHTML = "That's not a number, ya goober! That'll cost you 1 guess.";
        } else if(guess > 100 || guess < 1) {
            emoji.innerHTML = "😠";
            result.innerHTML = "I said a number between 1 and 100! That'll cost you 1 guess.";
        } else if(guess == randomNumber) {
            emoji.innerHTML = "🤯";
            result.innerHTML = "Yes! You Win! Reload to play again!";
            submitButton.parentNode.removeChild(submitButton);
            guessInput.parentNode.removeChild(guessInput);
            remainingGuessParagraph.parentNode.removeChild(remainingGuessParagraph);
        } else if(guess < randomNumber + 2 && guess > randomNumber - 2 ) {
            emoji.innerHTML = "😃";
            result.innerHTML = guess + "? Spicy! You're so close! Try again!";
        } else if(guess < randomNumber + 5 && guess > randomNumber - 5 ) {
            emoji.innerHTML = "🙂";
            result.innerHTML = guess + "? Hot! Try again!";
        } else if(guess < randomNumber + 10 && guess > randomNumber - 10 ) {
            emoji.innerHTML = "😐";
            result.innerHTML = guess + "? warm. Try again!";
        } else if(guess < randomNumber + 25 && guess > randomNumber - 25 ) {
            emoji.innerHTML = "🙁";
            result.innerHTML = guess + "? Cold. Try again!";
        } else if(guess < randomNumber + 50 && guess > randomNumber - 50 ) {
            emoji.innerHTML = "😖";
            result.innerHTML = guess + "? Freezing. Try again!";
        } else {
            emoji.innerHTML = "🤬";
            result.innerHTML = guess + "? Way off. Try again!";
        }

        if (guessesLeft === 1) {
            emoji.innerHTML = "⚰";
            result.innerHTML = "You died. Reload to play again!"
            submitButton.parentNode.removeChild(submitButton);
            guessInput.parentNode.removeChild(guessInput);
            remainingGuessParagraph.parentNode.removeChild(remainingGuessParagraph);
        } else if (guessesLeft === 2) {
            submitButton.innerHTML = "Last chance!"
        }
        guessesLeft--
        numberOfGuesses.innerHTML = guessesLeft;
    }
}
window.onload = load;