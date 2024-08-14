// Do not remove this line
const prompt = require("syncprompt");
const randomNumber = Math.ceil(Math.random() * 20);

// Generate a random number between 1 and 20
const randomNumber = Math.ceil(Math.random() * 20);
let guessCount = 0;

function checkGuess(userGuess) {
	guessCount++;

	if (userGuess > randomNumber) {
		console.log("Too high! Try again.");
		return false;
	} else if (userGuess < randomNumber) {
		console.log("Too low! Try again.");
		return false;
	} else {
		console.log(
			`Congratulations! You guessed the correct number (${randomNumber}) in ${guessCount} guesses.`,
		);
		return true;
	}
}

// Function to start the guessing game
function startGame() {
	let guessedCorrectly = false;

	while (!guessedCorrectly) {
		const userGuess = parseInt(prompt("Guess a number between 1 and 20:"));

		if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 20) {
			guessedCorrectly = checkGuess(userGuess);
		} else {
			console.log("Please enter a valid number between 1 and 20.");
		}
	}
}

// Start the game
startGame();
