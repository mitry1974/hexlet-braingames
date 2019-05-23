#!/usr/bin/env node
import readlineSync from 'readline-sync';

const getPlayerName = () => readlineSync.question('May I have your name? ');

const printGreetingAndReturnPlayerName = (game) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.getGameDescription());
  const playerName = getPlayerName();
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

const printAndReturnQuery = (game) => {
  const query = game.getNextQuery();
  console.log(`Question: ${query.toString()}`);
  return query;
};

const playGame = (game) => {
  const pName = printGreetingAndReturnPlayerName(game);
  let bres = true;
  for (let i = 0; i < game.getRoundsCount(); i += 1) {
    const query = printAndReturnQuery();
    const answer = readlineSync.question('Your answer: ');
    bres = bres && query.check(answer);
    if (bres) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${query.getCorrectAnswer()}'.`);
      break;
    }
  }
  console.log(bres ? `Congratulations, ${pName}!` : `Let's try again, ${pName}!`);
};

export default playGame;
