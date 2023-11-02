import React from 'react';

function ResultDisplay({ result }) {
	return (
		<div className="guess-results">
			{result.map((letter, index) => {
				return (
					<span key={index} className="cell">
						{letter}
					</span>
				);
			})}
		</div>
	);
}

export default ResultDisplay;
