import React from 'react';

import image from '../../imgPaths.js';

function HangmanImage() {
	return (
		<div className="img-wrapper">
			<img
				className="img"
				src={image.image3}
				alt={`Hangman image stage ${3} of 11`}
			/>
		</div>
	);
}

export default HangmanImage;
