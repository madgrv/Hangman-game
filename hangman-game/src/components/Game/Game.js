import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput';
import GuessResult from '../GuessResults';
import HangmanImage from '../HangmanImage';

function Game() {
	const word = sample(WORDS);

	console.log({ word });

	return (
		<div>
			<HangmanImage />
			<GuessInput />
			<GuessResult />
		</div>
	);
}

export default Game;
