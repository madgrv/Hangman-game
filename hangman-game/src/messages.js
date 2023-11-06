export const messages = {
	won: {
		title: 'Congratulations!',
		subtitle: 'You got it!',
		answer: 'The word is ',
	},
	lost: {
		title: 'Game Over!',
		subtitle: '',
		answer: 'The correct answer was ',
	},
	info: {
		title: 'Game rules',
		subtitle: '',
		answer: `Hangman is a classic word-guessing game where the objective is to 
        deduce a hidden word by guessing one letter at a time. The game begins with 
        a series of blanks representing each letter of the word. Players guess 
        letters one at a time, and if the guessed letter is in the word, it is revealed 
        in its correct position(s). If the letter is not in the word, a part of the hangman 
        is drawn. The player continues to guess letters until either the word is fully revealed,
        or the hangman is completely drawn, which results in a loss. The hangman consists of a 
        predetermined number of parts, which typically includes the head, body, two arms, and 
        two legs, for a total of ten incorrect guesses allowed before the game is over. 
        
        The challenge is to guess the word before the hangman is finished to win the game. 
        
        It's a game of wits, vocabulary strength, and sometimes, sheer luck!`,
	},
};
