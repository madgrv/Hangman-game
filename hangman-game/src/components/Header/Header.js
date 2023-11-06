import React from 'react';

function Header({ showBanner, setShowBanner, setGameStatus }) {
	return (
		<header>
			<h1>Hangman Game</h1>
			<div
				className="info-wrapper"
				onClick={() => {
					setShowBanner(!showBanner);
				}}
			>
				<button className="info-icon">
					<h2>i</h2>
				</button>
				<p className="info-text">Game rules</p>
			</div>
		</header>
	);
}

export default Header;
