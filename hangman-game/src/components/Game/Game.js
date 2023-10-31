import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// import GuessInput from '../GuessInput';
import HangmanImage from '../HangmanImage';
import GuessResult from '../GuessResults';
import Keyboard from '../Keyboard/Keyboard';
import NewGame from '../NewGame';

function Game() {
	// Store the word to be guessed in state to be able to reset the game
	const [word, setWord] = React.useState(sample(WORDS));
	const [guess, setGuess] = React.useState([]);
	// Track the number of attempts to update the images
	const [attemptsNum, setAttemptsNum] = React.useState(0);

	// Use useEffect to log the word only when it changes
	React.useEffect(() => {
		console.log({ word });
	}, [word]); // The second argument is an array of dependencies.
	// The effect will only run when the values in this array change.

	// A function to reset and start a new game
	function resetGame() {
		setGuess([]);
		setAttemptsNum(0);
		setWord(sample(WORDS));
	}

	return (
		<div>
			<HangmanImage attemptsNum={attemptsNum} />
			<GuessResult guess={guess} /> <p>{attemptsNum}</p>
			<Keyboard
				guess={guess}
				setGuess={setGuess}
				attemptsNum={attemptsNum}
				setAttemptsNum={setAttemptsNum}
			/>
			{attemptsNum === 10 && <NewGame resetGame={resetGame} />}
		</div>
	);
}

export default Game;
