import React from 'react';

function Keyboard({ guess, setGuess, count, setCount, word, gameStatus }) {
	const lettersTop = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const lettersMid = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const lettersBott = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

	function handleLetterClick(letter) {
		// Delete functionality for the Practice Mode with early return checks
		// If the letter is backspace, handle deletion
		// if (letter === 'BACKSPACE') {
		// 	if (guess.length > 0) {
		// 		const nextCount = {
		// 			...count,
		// 			count: count.count - 1,
		// 			remaining: count.remaining + 1,
		// 		};
		// 		setCount(nextCount);

		// 		const nextGuess = [...guess];
		// 		nextGuess.pop();
		// 		setGuess(nextGuess);
		// 	}
		// 	return;
		// }

		const nextGuess = [...guess, letter];

		// If the letter has not been guessed and is not in the word
		if (!word.includes(letter) && !guess.includes(letter)) {
			const nextCount = {
				...count,
				count: count.count + 1,
				remaining: count.remaining - 1,
			};
			setCount(nextCount);
		} else if (word.includes(letter) && !guess.includes(letter)) {
			// If the letter is in the word and has not been guessed
			const nextCount = {
				...count,
				count: count.count + 1,
			};
			setCount(nextCount);
		}

		// Update the guess with the new letter
		setGuess(nextGuess);
	}

	// Add event listener to enable input by typing on the keyboard
	React.useEffect(() => {
		// Enable the event listener only for the allowed keys
		const handleKeyDown = (event) => {
			// Immediately exit if no guesses remain, or the game is not running
			if (count.remaining === 0 || gameStatus !== 'running') {
				return;
			}

			const allowedKeys = [
				...lettersTop,
				...lettersMid,
				...lettersBott,
				// 'BACKSPACE',
			];

			const keyPressed = event.key.toUpperCase();

			if (allowedKeys.includes(keyPressed)) {
				handleLetterClick(keyPressed);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [count, gameStatus]);

	return (
		<div
			className={`key-wrapper${
				gameStatus !== 'running' ? ' disabled-div' : ''
			}`}
		>
			<div className="key-row">
				{lettersTop.map((lett) => (
					<div
						key={lett}
						className={`key-cell ${
							guess.includes(lett) && word.includes(lett) ? 'guessed' : ''
						} ${
							guess.includes(lett) && !word.includes(lett) ? 'disabled-div' : ''
						}`}
						onClick={() => handleLetterClick(lett)}
					>
						{lett}
					</div>
				))}
			</div>
			<div className="key-row">
				{lettersMid.map((lett) => (
					<div
						key={lett}
						className={`key-cell ${
							guess.includes(lett) && word.includes(lett) ? 'guessed' : ''
						} ${
							guess.includes(lett) && !word.includes(lett) ? 'disabled-div' : ''
						}`}
						onClick={() => handleLetterClick(lett)}
					>
						{lett}
					</div>
				))}
			</div>
			<div className="key-row">
				{lettersBott.map((lett) => (
					<div
						key={lett}
						className={`key-cell ${
							guess.includes(lett) && word.includes(lett) ? 'guessed' : ''
						} ${
							guess.includes(lett) && !word.includes(lett) ? 'disabled-div' : ''
						}`}
						onClick={() => handleLetterClick(lett)}
					>
						{lett}
					</div>
				))}
				{/* <div
					key="delInput"
					className="key-cell backspace"
					onClick={() => handleLetterClick('BACKSPACE')}
				>
					{'←'}
				</div> */}
			</div>
		</div>
	);
}

export default Keyboard;
