import React from 'react';

function Banner({ gameStatus, word, count }) {
	return (
		<div>
			{gameStatus === 'won' ? (
				<div className="happy banner">
					<p>
						<strong>Congratulations!</strong> Got it in{' '}
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
						Game Over! Sorry, the correct answer is{' '}
						<strong>{`"${word}"`}</strong>.
					</p>
				</div>
			)}
		</div>
	);
}

export default Banner;
