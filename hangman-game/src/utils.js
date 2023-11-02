//Game utilities

// A function to pick a random word from a given array of words
export const sample = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};

// // Function to check if the guessed charachter is correct

// export function checkGuess(guess, answer) {
// 	console.log('guess:', guess); // Log the guess
// 	console.log('answer:', answer); // Log the answer

// 	const word = answer.split('');
// 	// console.log('word:', word); // Log the split answer

// 	const positions = {};
// 	word.forEach((letter, index) => {
// 		if (letter === guess) {
// 			positions[index] = guess;
// 		}
// 	});

// 	console.log('positions:', JSON.stringify(positions, null, 2));
// 	return positions;
// }

// // checkGuess('T', 'ARTICULATE');

// let count = { count: 0, remaining: 10 };

// count.remaining -= 1;
// count.count += 1;

// console.table(count);
