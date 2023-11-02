import React from 'react';

function Keyboard({ guess, setGuess, count, setCount, word }) {
	const lettersTop = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
	const lettersMid = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
	const lettersBott = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

	function handleLetterClick(letter) {
		// Delete functionality for the Practise Mode with early return checks
		if (letter === 'backspace' && count.count >= 1) {
			setCount((prev) => ({
				count: prev.count - 1,
				remaining: prev.remaining + 1,
			}));

			const nextGuess = [...guess];
			nextGuess.pop();
			setGuess(nextGuess);
			return;
		} else if (letter === 'backspace' && count.count <= 0) {
			return;
		}

		// Update state in parent component with current value
		const nextGuess = [...guess, letter];
		setGuess(nextGuess);

		// Update counter in parent component
		if (!word.includes(letter)) {
			setCount((prev) => ({
				count: prev.count + 1,
				remaining: prev.remaining - 1,
			}));
		} else if (word.includes(letter) && !guess.includes(letter)) {
			setCount((prev) => ({
				count: prev.count + 1,
				remaining: prev.remaining,
			}));
		} else {
			return;
		}
	}

	return (
		<div
			className={`key-wrapper${count.remaining === 0 ? ' disabled-div' : ''}`}
		>
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
					{/* {'←'} */}
					{'↩'}
				</div>
			</div>
		</div>
	);
}

export default Keyboard;
