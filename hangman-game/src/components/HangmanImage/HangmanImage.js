import React from 'react';

import imagePaths from '../../imgPaths.js';

function HangmanImage({ word, count }) {
	const countdown = 10 - count.remaining;

	return (
		<div className="img-wrapper">
			<img
				className="img"
				src={
					count.remaining <= 10
						? imagePaths['image' + countdown]
						: imagePaths.image10
				}
				alt={`Hangman stage ${countdown} of 10`}
			/>
		</div>
	);
}

export default HangmanImage;
