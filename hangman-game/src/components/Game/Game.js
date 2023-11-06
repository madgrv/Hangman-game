import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import Header from '../Header';
import HangmanImage from '../HangmanImage';
import GuessResult from '../GuessResults';
import Keyboard from '../Keyboard/Keyboard';
import NewGame from '../NewGame';
import ResultDisplay from '../ResultDisplay/ResultDisplay';
import Banner from '../Banner/Banner';

function Game() {
	// Store the word to be guessed in state to be able to reset the game
	const [word, setWord] = React.useState(sample(WORDS));
	const [guess, setGuess] = React.useState([]);
	// Track the number of attempts to update the images
	const [count, setCount] = React.useState({ count: 0, remaining: 10 });
	const [result, setResult] = React.useState(Array(word.length).fill('_'));
	const [gameStatus, setGameStatus] = React.useState('running');
	const [showBanner, setShowBanner] = React.useState(false);

	// Use useEffect to log the word only when it changes
	React.useEffect(() => {
		console.log({ word });
	}, [word]); // The second argument is an array of dependencies.
	// The effect will only run when the values in this array change.

	React.useEffect(() => {
		if (guess.length > 0) {
			const nextResult = word
				.split('')
				.map((letter) => (guess.includes(letter) ? letter : '_'));
			setResult(nextResult);
		}
	}, [guess, word]);

	// Check and update gameStatus state
	React.useEffect(() => {
		if (count.remaining === 0) {
			setGameStatus('lost');
			setShowBanner(true);
		} else if (!result.includes('_')) {
			setGameStatus('won');
			setShowBanner(true);
		}
	}, [count, result]);

	// A function to reset and start a new game
	function resetGame() {
		const nextWord = sample(WORDS);
		// Delayed action to allow button animation to complete
		setTimeout(() => {
			setWord(nextWord);
			setGuess([]);
			setCount({ count: 0, remaining: 10 });
			setResult(Array(nextWord.length).fill('_'));
			setGameStatus('running');
			setShowBanner(false);
		}, 400);
	}

	return (
		<div>
			<Header
				showBanner={showBanner}
				setShowBanner={setShowBanner}
				setGameStatus={setGameStatus}
			/>
			{showBanner && (
				<Banner
					gameStatus={gameStatus}
					setGameStatus={setGameStatus}
					word={word}
					setShowBanner={setShowBanner}
				/>
			)}
			<HangmanImage word={word} count={count} />
			<ResultDisplay result={result} answer={word} />
			<GuessResult count={count} word={word} />
			<Keyboard
				guess={guess}
				setGuess={setGuess}
				count={count}
				setCount={setCount}
				word={word}
				gameStatus={gameStatus}
			/>
			<NewGame resetGame={resetGame} />
		</div>
	);
}

export default Game;
