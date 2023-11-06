import React from 'react';
import { messages } from '../../messages';

function Banner({
	gameStatus,
	setGameStatus,
	word,
	count,
	showRules,
	setShowRules,
}) {
	const msg = messages;
	const bannerType = gameStatus;

	console.log(bannerType);

	return (
		<div>
			<div className={`${bannerType} banner fade-in`}>
				<div>
					<h2>{msg[bannerType].title}</h2>
					<br />
					{msg[bannerType].subtitle}
					<strong>
						<br />
						<br />
						{msg[bannerType].answer}
						{bannerType === 'info' ? '' : <strong>"{word}"</strong>}
						<br />
					</strong>
					<br />
					<div>
						<button className="banner-close" onClick={() => setGameStatus('')}>
							Close window
						</button>
					</div>
				</div>
			</div>
			{/* {showRules && (
				<button className="button pushable" onClick={() => setShowRules(false)}>
					Close window
				</button>
			)} */}
		</div>
	);
}

export default Banner;
