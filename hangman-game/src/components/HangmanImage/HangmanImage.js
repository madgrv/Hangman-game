import React from 'react';

import imagePaths from '../../imgPaths.js';

function HangmanImage({ attemptsNum }) {
	return (
		<div className="img-wrapper">
			<img
				className="img"
				src={
					attemptsNum <= 10
						? imagePaths['image' + attemptsNum]
						: imagePaths.image10
				}
				alt={`Hangman stage ${attemptsNum} of 10`}
			/>
		</div>
	);
}

export default HangmanImage;
