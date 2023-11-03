import React from 'react';

function Banner({ gameStatus, word, count }) {
	return (
		<div>
			{gameStatus === 'won' ? (
				<div className="happy banner">
					<p>
						<h2>Congratulations!</h2>
						<br />
						Got it in{' '}
						<strong>
							{count.count > 1
								? count.count + ' guesses'
								: count.count + ' guess'}
						</strong>
					</p>
				</div>
			) : (
				<div className="sad banner">
					<p>
						<h2>Game Over!</h2>
						<br />
						The correct answer is <strong>{`"${word}"`}</strong>.
					</p>
				</div>
			)}
		</div>
	);
}

export default Banner;
