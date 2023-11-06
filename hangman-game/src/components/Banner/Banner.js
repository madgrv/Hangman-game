import React from 'react';
import { messages } from '../../messages';

function Banner({ gameStatus, word, setShowBanner }) {
	const msg = messages;
	const bannerType = gameStatus === 'running' ? 'info' : gameStatus;

	console.log(bannerType);

	return (
		<div>
			<div className={`${bannerType} banner fade-in`}>
				<div>
					<h2>{msg[bannerType].title}</h2>
					<br />
					<div>
						<p>
							{bannerType === 'info' ? (
								<>
									{msg[bannerType].answer.split('\n').map((line, index) => (
										<React.Fragment key={index}>
											{line}
											<br />
										</React.Fragment>
									))}
								</>
							) : (
								<>
									<strong>{msg[bannerType].answer}</strong>
									<strong>"{word}"</strong>
								</>
							)}
						</p>
						<button
							className="banner-close"
							onClick={() => setShowBanner(false)}
						>
							Close window
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
