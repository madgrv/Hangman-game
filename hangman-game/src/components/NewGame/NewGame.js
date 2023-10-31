import React from 'react';

function NewGame({ resetGame }) {
	return (
		<div>
			<button className="new-game" type="button" onClick={resetGame}>
				New Game
			</button>
		</div>
	);
}

export default NewGame;
