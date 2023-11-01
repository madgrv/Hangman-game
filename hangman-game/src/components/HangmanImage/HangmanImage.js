import React from 'react';

import imagePaths from '../../imgPaths.js';

function HangmanImage({ count }) {
	return (
		<div className="img-wrapper">
			<img
				className="img"
				src={count <= 10 ? imagePaths['image' + count] : imagePaths.image10}
				alt={`Hangman stage ${count} of 10`}
			/>
		</div>
	);
}

export default HangmanImage;
