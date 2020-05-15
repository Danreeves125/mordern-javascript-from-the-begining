/*
    Game Feature to add in the future
    - Difficulty Level (Easy, Medium, Hard)
    - Add Custom Difficulty level where the user can change the min, max and number of guesses

    GAME FUNCTIONS:
    - Player must guess a number between min and max
    - Player gets a certain amount of guesses
    - notify Player of remaining guesses
    - Notify the player of the correct answer if the loose
    - Let player choose to play again
 */



// Game Values
let min = 1,
    max = 10,
    winnerNum = getWiningNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-value'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI Min & Max
minNum.textContent = min;
maxNum.textContent = max;

// Play again - If a class has been added after the DOM has loaded you need to add the event listen onto the parent and search for the class using event delegation.
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    // Validate
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winnerNum) {
        //Game Over - won
        gameOver(true, `${winnerNum} is correct, YOU WIN!!!!`);
    } else {
        // Wrong Number
        guessesLeft -= 1; // this is that same as guessesleft = guessLeft - 1;

        if(guessesLeft === 0) {
            // Gameover - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winnerNum}`);
        } else {
            // Game Continues - answer wrong

            // Change Border Colour
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';

            // Set Message
            setMessage(`Guess is not correct ${guessesLeft} guesses left`, 'red');
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;

    won === true ? color = 'green' : color === 'red';

    // Disable input
    guessInput.disabled = true;

    // Change Border Colour
    guessInput.style.borderColor = color;

    // Set Message
    setMessage(msg, color);

    // Play again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again'
}

function getWiningNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)+ min);
}

// Set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

