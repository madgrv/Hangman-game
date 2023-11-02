import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

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

	React.useEffect(() => {
		if (count.remaining === 0) {
			setGameStatus('lost');
		} else if (!result.includes('_')) {
			setGameStatus('won');
		}
	}, [count, result]);

	// A function to reset and start a new game
	function resetGame() {
		const nextWord = sample(WORDS);
		setWord(nextWord);
		setGuess([]);
		setCount({ count: 0, remaining: 10 });
		setResult(Array(nextWord.length).fill('_'));
		setGameStatus('running');
	}

	return (
		<div>
			<HangmanImage word={word} count={count} />
			<ResultDisplay result={result} answer={word} />
			<GuessResult count={count} />
			<p>{`Word length: ${word.length}`}</p>
			<p>{`counters = Count: ${count.count} Remaining: ${count.remaining}`}</p>
			<Keyboard
				guess={guess}
				setGuess={setGuess}
				count={count}
				setCount={setCount}
				word={word}
				gameStatus={gameStatus}
			/>
			{/* conditionally show the new game button at the end of the game */}
			{(gameStatus === 'won' || gameStatus === 'lost') && (
				<NewGame resetGame={resetGame} />
			)}
			{(gameStatus === 'won' || gameStatus === 'lost') && (
				<Banner gameStatus={gameStatus} word={word} count={count} />
			)}
		</div>
	);
}

export default Game;
