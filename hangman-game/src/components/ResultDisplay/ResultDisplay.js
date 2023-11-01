import React from 'react';
import { checkGuess, range } from '../../utils';

function ResultDisplay({ guess, answer }) {
	const result = checkGuess(guess[guess.length - 1], answer);
	// console.log(result);

	return (
		<div className="guess-results">
			{range(answer.length).map((index) => {
				return (
					<span key={index} className="cell">
						{/* {index === result[index] ? result[index] : undefined} */}
						{result[index]}
					</span>
				);
			})}
		</div>
	);
}

export default ResultDisplay;
