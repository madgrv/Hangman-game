import React from 'react';

import imagePaths from '../../imgPaths.js';

function HangmanImage({ word, count }) {
	return (
		<div className="img-wrapper">
			<img
				className="img"
				src={
					count.remaining <= 10
						? imagePaths['image' + (word.length - count.remaining)]
						: imagePaths.image10
				}
				alt={`Hangman stage ${count} of 10`}
			/>
		</div>
	);
}

export default HangmanImage;
