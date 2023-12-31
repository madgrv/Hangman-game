# Hangman Game

## Description

Hangman is a classic word guessing game. This React-based application allows users to play Hangman directly from their web browser. Players try to guess a hidden word by suggesting letters within a certain number of attempts. Each incorrect guess adds a part to the hangman drawing, and the game continues until the word is guessed correctly or the hangman drawing is complete.

![Hangman game screenshot.png](./hangman-game/public/Hangman-screen-capture.gif)

## Features

- **Interactive Keyboard**: On-screen keyboard for letter selection.
- **Hangman Image**: Updated hangman drawing with each incorrect guess.
- **Attempt Counter**: Displays the number of remaining attempts.
- **New Game Button**: Resets the game and generates a new word to guess.
- **Game Rules**: Show/hide the games rules.
- **Responsive Design**: Optimized for desktop and mobile viewing.
- **Dynamic Guess Feedback**: The UI reflects the current state, updating guesses and remaining attempts in real time.

## Installation

1. **Clone the Repository**:  
   `git clone https://github.com/madgrv/hangman-game.git`

2. **Navigate to the Project Directory**:  
   `cd hangman-game`

3. **Install Dependencies**:  
   Make sure you have [Node.js](https://nodejs.org/) installed, then run:  
   `npm install`

4. **Start the Application**:  
   `npm start`

   This will start the development server and open the application in your default web browser.

## How to Play

1. **Start a New Game**: Click on the "New Game" button to start a new game.
2. **Guess a Letter**: Click on a letter in the on-screen keyboard to make a guess.
3. **Watch the Hangman Drawing**: With each incorrect guess, the hangman drawing will get closer to completion.
4. **Win or Lose**: Guess the word before the hangman drawing is complete to win. If the hangman is completed before you guess the word, you lose.
5. **Play Again**: Whether you win or lose, you can start a new game by clicking the "New Game" button again.

## Technologies Used

- React.js
- CSS
- JavaScript

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any changes or fixes.

## Contact

If you have any questions or feedback, please contact me or open an issue in the repository.
