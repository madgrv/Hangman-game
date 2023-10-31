//Game utilities

// A function to pick a random word from a given array of words
export const sample = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)];
};
