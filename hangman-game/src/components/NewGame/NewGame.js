import React from 'react';

function NewGame({ resetGame }) {
	return (
		<div>
			<button className="button pushable" type="button" onClick={resetGame}>
				<span className="front">New Game</span>
			</button>
		</div>
	);
}

export default NewGame;
