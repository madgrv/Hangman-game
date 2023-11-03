import React from 'react';

function GuessResults({ count, word }) {
	return (
		<div className="result-display">
			<p>{`Remaining attempts: ${count.remaining}`}</p>
			<p>{`Word length: ${word.length}`}</p>
		</div>
	);
}

export default GuessResults;
