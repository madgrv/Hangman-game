import React from 'react';

function Keyboard({ guess, setGuess, attemptsNum, setAttemptsNum }) {
	const lettersTop = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const lettersMid = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const lettersBott = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

	function handleLetterClick(letter) {
		// Delete functionality for the Practise Mode with early return checks
		if (letter === 'backspace' && attemptsNum >= 1) {
			const nextAttemptsNum = attemptsNum - 1;
			setAttemptsNum(nextAttemptsNum);

			const nextGuess = [...guess];
			nextGuess.pop();
			setGuess(nextGuess);
			return;
		} else if (letter === 'backspace' && attemptsNum <= 0) {
			return;
		}

		const nextGuess = [...guess, letter];
		setGuess(nextGuess);
		const nextAttemptsNum = attemptsNum + 1;
		setAttemptsNum(nextAttemptsNum);
	}

	return (
		<div className={`key-wrapper${attemptsNum >= 10 ? ' disabled-div' : ''}`}>
			<div className="key-row">
				{lettersTop.map((lett) => (
					<div
						key={lett}
						className="key-cell"
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
						className="key-cell"
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
						className="key-cell"
						onClick={() => handleLetterClick(lett)}
					>
						{lett}
					</div>
				))}
				<div
					key="delInput"
					className="key-cell backspace"
					onClick={() => handleLetterClick('backspace')}
				>
					{'←'}
				</div>
			</div>
		</div>
	);
}

export default Keyboard;
