import React from 'react';

function GuessResults({ count }) {
	return (
		<div>
			<p>{`remaining attempts: ${count.remaining}`}</p>
		</div>
	);
}

export default GuessResults;
