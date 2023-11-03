import React from 'react';

function Banner({ gameStatus, word, count }) {
	return (
		<div>
			{gameStatus === 'won' ? (
				<div className="happy banner">
					<div>
						<h2>Congratulations!</h2>
						<br />
						The word is <strong>"{word}"</strong>
						<br />
						<br />
						You got it{' '}
						<strong>
							{count.count + 1 === word.length ? 'with NO MISTAKES!!!' : `!`}
						</strong>
					</div>
				</div>
			) : (
				<div className="sad banner">
					<div>
						<h2>Game Over!</h2>
						<br />
						The correct answer is <strong>{`"${word}"`}</strong>.
					</div>
				</div>
			)}
		</div>
	);
}

export default Banner;
