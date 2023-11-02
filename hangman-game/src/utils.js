//Game utilities

// A function to pick a random word from a given array of words
export const sample = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

// Function to check if the guessed charachter is correct

export function checkGuess(guess, answer) {
	console.log('guess:', guess); // Log the guess
	console.log('answer:', answer); // Log the answer

	const word = answer.split('');
	// console.log('word:', word); // Log the split answer

	const positions = {};
	word.forEach((letter, index) => {
		if (letter === guess) {
			positions[index] = guess;
		}
	});

	console.log('positions:', JSON.stringify(positions, null, 2));
	return positions;
}

// checkGuess('T', 'ARTICULATE');

// Generate an array in a specified range
export const range = (start, end, step = 1) => {
	let output = [];
	if (typeof end === 'undefined') {
		end = start;
		start = 0;
	}
	for (let i = start; i < end; i += step) {
		output.push(i);
	}
	return output;
};

// let count = { count: 0, remaining: 10 };

// count.remaining -= 1;
// count.count += 1;

// console.table(count);
