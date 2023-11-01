import React from 'react';

function GuessResults({ guess, word }) {
	return (
		<div>
			<p>{`remaining attempts: ${word.length - guess.length}`}</p>
		</div>
	);
}

export default GuessResults;
