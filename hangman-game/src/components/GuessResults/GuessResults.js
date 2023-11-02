import React from 'react';

function GuessResults({ count, word }) {
	return (
		<div className="result-display">
			<p>{`remaining attempts: ${count.remaining}`}</p>
			<p>{`Word length: ${word.length}`}</p>
			{/* <p>{`counters = Count: ${count.count} Remaining: ${count.remaining}`}</p> */}
		</div>
	);
}

export default GuessResults;
