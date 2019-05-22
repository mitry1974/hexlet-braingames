#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getPlayerName = () => readlineSync.question('May I have your name? ');

const playGame = (game) => {
  console.log('Welcome to the Brain Games!');
  const gameObj = game();
  console.log(gameObj.getGameDescription());
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!`);
  let bres = true;
  for (let i = 0; i < gameObj.getRoundsCount(); i += 1) {
    const query = gameObj.getNextQuery();
    console.log(`Question: ${query.toString()}`);
    const answer = readlineSync.question('Your answer: ');
    bres = bres && query.check(answer);
    if (bres) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${query.getCorrectAnswer()}'.`);
      break;
    }
  }
  console.log(bres ? `Congratulations, ${playerName}!` : `Let's try again, ${playerName}!`);
};

export default playGame;
