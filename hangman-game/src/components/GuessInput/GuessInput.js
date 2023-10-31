import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('');

	return (
		<div>
			<form className="guess-input-wrapper">
				<label htmlFor="guess-input">Enter guess:</label>
				<input
					required
					autocomplete="off"
					// disabled={gameStatus !== undefined}
					value={guess}
					onChange={(e) => {
						setGuess(e.target.value.toUpperCase());
					}}
					id="guess-input"
					type="text"
				/>
			</form>
		</div>
	);
}

export default GuessInput;
